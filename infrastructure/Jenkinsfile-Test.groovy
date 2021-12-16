pipeline {
    agent {
        dockerfile {
            filename 'infrastructure/docker/dockerfile-node'
            additionalBuildArgs '--build-arg JENKINS_USER_ID=`id -u jenkins` --build-arg JENKINS_GROUP_ID=`id -g jenkins`'
        }
    }

    environment {
        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
        
        VITE_APP_KEYCLOAK_URL = "https://auth.opendatahub.testingmachine.eu/auth"
        VITE_APP_KEYCLOAK_REALM = "noi"
        VITE_APP_KEYCLOAK_CLIENT_ID = "it.bz.opendatahub.databrowser"
        VITE_APP_KEYCLOAK_REDIRECT_URI = "https://databrowser.opendatahub.testingmachine.eu/silent-check-sso.html"
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm run bootstrap'
            }
        }
        stage('Test') {
            steps {
                sh 'cd databrowser && npm run lint'
                sh 'cd databrowser && npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'cd databrowser && npm run build'
            }
        }
        stage('Upload') {
            steps {
                s3Upload(bucket: 'it.bz.opendatahub.databrowser-test', acl: 'PublicRead', file: './databrowser/dist')
            }
        }
    }
}
