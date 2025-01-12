import { CellComponent } from '../../../domain/cellComponents/types';
import { EditViewConfig } from '../../../domain/datasetConfig/types';

export const eventEditView: EditViewConfig = {
  elements: [
    {
      name: 'Main data',
      slug: 'main-data',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Shortname',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Shortname' },
            },
            {
              title: 'Logo',
              component: CellComponent.ImageCell,
              fields: {
                src: 'ContactInfos.{language}.LogoUrl',
              },
            },
            {
              title: 'Main Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'ImageGallery.0.ImageUrl',
              },
              params: {
                width: '15%',
              },
            },
          ],
        },
        {
          name: 'IDs',
          properties: [
            {
              title: 'Tv Info',
              component: CellComponent.StringCell,
              fields: { text: 'LocationInfo.TvInfo.Id' },
            },
            {
              title: 'Region Id',
              component: CellComponent.StringCell,
              fields: { text: 'LocationInfo.RegionInfo.Id' },
            },
            {
              title: 'Area Id',
              component: CellComponent.StringCell,
              fields: { text: 'LocationInfo.AreaInfo.Id' },
            },
            {
              title: 'Municipality Id',
              component: CellComponent.StringCell,
              fields: { text: 'LocationInfo.MunicipalityInfo.Id' },
            },
            {
              title: 'District Id',
              component: CellComponent.StringCell,
              fields: { text: 'DistrictId' },
            },
          ],
        },
        {
          name: 'Data states',
          properties: [
            {
              title: 'Last Changes',
              component: CellComponent.DateCell,
              fields: { date: 'LastChange' },
              params: {
                format: 'd/M/yyyy HH:mm',
              },
            },
            {
              title: 'Active on Source',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'Active' },
            },
            {
              title: 'Active on SMG',
              component: CellComponent.ToggleCell,
              fields: { text: 'SmgActive' },
            },
            {
              title: 'Active on Open Data Hub',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'OdhActive' },
              params: { preventChange: 'true' },
            },
          ],
        },
        {
          name: 'Source',
          properties: [
            {
              title: 'Source',
              component: CellComponent.StringCell,
              fields: { text: '_Meta.Source' },
            },
          ],
        },
      ],
    },
    {
      name: 'Text information',
      slug: 'text-information',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'Meta Title',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.MetaTitle' },
            },
            {
              title: 'Meta Description',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.MetaDesc' },
            },
            {
              title: 'Title',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.Title' },
            },
            {
              title: 'Header',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.Header' },
            },
            {
              title: 'Sub Header',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.SubHeader' },
            },
            {
              title: 'Intro Text',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.IntroText' },
            },
            {
              title: 'Base Text',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.BaseText' },
            },
            {
              title: 'Additional Text',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.AdditionalText' },
            },
            {
              title: 'GetThereText',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'Detail.{language}.GetThereText' },
            },
          ],
        },
      ],
    },
    {
      name: 'Images',
      slug: 'images',
      subcategories: [
        {
          name: '',
          properties: [
            {
              title: '',
              component: CellComponent.EditImageGalleryCell,
              fields: {
                images: 'ImageGallery',
              },
              params: {
                alt: 'ImageAltText.{language}',
                src: 'ImageUrl',
                name: 'ImageName',
                width: 'Width',
                height: 'Height',
                title: 'ImageTitle.{language}',
                description: 'ImageDesc.{language}',
                copyright: 'CopyRight',
                license: 'License',
                listPosition: 'ListPosition',
                active: '',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'GPS Data',
      slug: 'gps-data',
      subcategories: [
        {
          name: 'GPS Data',
          properties: [
            {
              title: '',
              component: CellComponent.GpsPointsCell,
              class: 'w-48',
              fields: {
                type: 'GpsPoints.position.Gpstype',
                latitude: 'GpsPoints.position.Latitude',
                longitude: 'GpsPoints.position.Longitude',
                altitude: 'GpsPoints.position.Altitude',
                altitudeUnit: 'GpsPoints.position.AltitudeUnitofMeasure',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Files',
      slug: 'files',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'PDF',
              component: CellComponent.EditImageGalleryCell,
              fields: {
                images: 'Pdf',
              },
              params: {
                alt: 'ImageAltText.{language}',
                src: 'ImageUrl',
                name: 'ImageName',
                width: 'Width',
                height: 'Height',
                title: 'ImageTitle.{language}',
                description: 'ImageDesc.{language}',
                copyright: 'CopyRight',
                license: 'License',
                listPosition: 'ListPosition',
                active: '',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Tags',
      slug: 'tags',
      subcategories: [
        {
          name: 'General data',
          properties: [
            {
              title: 'SMG Tags',
              component: CellComponent.StringCell,
              fields: { text: 'SmgTags' },
            },
            {
              title: 'Open Data Hub Tags',
              component: CellComponent.ArrayCell,
              fields: { text: 'ODHTags' },
            },
          ],
        },
      ],
    },
    {
      name: 'Event details',
      slug: 'Event-details',
      subcategories: [
        {
          name: 'Time and date',
          properties: [
            {
              title: 'Date Begin',
              component: CellComponent.DateCell,
              fields: { date: 'DateBegin' },
              params: {
                format: 'do MMMM yyyy HH:mm',
              },
            },
            {
              title: 'Date End',
              component: CellComponent.DateCell,
              fields: { date: 'EventDatesEnd' },
              params: {
                format: 'do MMMM yyyy HH:mm',
              },
            },
            {
              title: 'Entrance',
              component: CellComponent.StringCell,
              fields: { text: 'Entrance' },
            },
            {
              title: 'Start',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.Begin' },
            },
            {
              title: 'End',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.End' },
            },
          ],
        },
        {
          name: 'Organizer Info',
          properties: [
            {
              title: 'CompanyName',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.CompanyName' },
            },
            {
              title: 'Tax Number',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Tax' },
            },
            {
              title: 'Vat',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Vat' },
            },
          ],
        },
        {
          name: 'Address',
          properties: [
            {
              title: 'Address',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Address' },
            },
            {
              title: 'Zip Code',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.ZipCode' },
            },
            {
              title: 'Country Name',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.CountryName' },
            },
            {
              title: 'Country Code',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.CountryCode' },
            },
          ],
        },
        {
          name: 'Contact details',
          properties: [
            {
              title: 'Email',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Email' },
            },
            {
              title: 'Phonenumber',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Phonenumber' },
            },
            {
              title: 'Url',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'ContactInfos.{language}.Url' },
            },
          ],
        },
        {
          name: 'Location',
          properties: [
            {
              title: 'Location',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'LocationInfo.TvInfo.Name.{language}' },
            },
            {
              title: 'Region Name',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'LocationInfo.RegionInfo.Name.{language}' },
            },
          ],
        },
        {
          name: 'Characteristics',
          properties: [
            {
              title: 'Single Days',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.SingleDays' },
            },
            {
              title: 'Ticket',
              component: CellComponent.StringCell,
              fields: { text: 'Ticket' },
            },
          ],
        },
        {
          name: 'Price',
          properties: [
            {
              title: 'Event Price',
              component: CellComponent.StringCell,
              fields: { text: 'EventPrice.0' },
            },
            {
              title: 'Type',
              component: CellComponent.StringCell,
              fields: { text: 'Type' },
            },
          ],
        },
        {
          name: 'Additional Information',
          properties: [
            {
              title: 'MinPersons',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.MinPersons' },
            },
            {
              title: 'MaxPersons',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.MaxPersons' },
            },
            {
              title: 'Ranc',
              component: CellComponent.StringCell,
              fields: { text: 'EventDate.Ranc' },
            },
            {
              title: 'SignOn',
              component: CellComponent.StringCell,
              fields: { text: 'SignOn' },
            },
            {
              title: 'PayMet',
              component: CellComponent.StringCell,
              fields: { text: 'PayMet' },
            },
            {
              title: 'Topics',
              component: CellComponent.ArrayCellTags,
              fields: {
                items: 'Topics',
              },
              params: {
                fieldName: 'TopicInfo',
                separator: ', ',
                max: '3',
              },
            },
          ],
        },
      ],
    },
  ],
};
