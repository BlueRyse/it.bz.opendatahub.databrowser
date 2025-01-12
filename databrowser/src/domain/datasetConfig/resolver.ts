import { DatasetRoute, DatasetConfig } from './types';
import { embeddedDatasetConfigSource } from './source/embedded';
import { generatedDatasetConfigSource } from './source/generated';
import { DatasetConfigSource } from './source/types';

interface DatasetConfigResolutionOptions {
  source?: string;
}

const datasetConfigSource: DatasetConfigSource[] = [
  embeddedDatasetConfigSource,
  generatedDatasetConfigSource,
];

export const resolveDatasetConfig = async (
  datasetRoute: DatasetRoute,
  options?: DatasetConfigResolutionOptions
): Promise<DatasetConfig> => {
  // Throw an error if path params are empty, because no resolution would be possible
  if (datasetRoute.pathParams.length === 0) {
    throw new Error('Path required to resolve view configuration');
  }

  // Define pool for dataset config sources. This pool takes into account
  // source preferences
  const configSourcesPool = getDatasetConfigSources(options?.source);

  // Compute dataset config config
  for (let i = 0; i < configSourcesPool.length; i++) {
    const source = configSourcesPool[i];

    try {
      const sourceResult = await source.resolve(datasetRoute);

      // If there is a valid ViewConfig, just use that one
      if (sourceResult != null) {
        return sourceResult;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : err;
      console.error(
        `Config source "${source.source}" reported a problem: `,
        errorMessage
      );
    }
  }

  throw new Error('No view configuration found');
};

export const getDatasetConfigSources = (
  source?: string
): DatasetConfigSource[] => {
  if (source == null) {
    return datasetConfigSource;
  }

  const vcs = datasetConfigSource.find((vcs) => vcs.source === source);

  return vcs == null ? [] : [vcs];
};
