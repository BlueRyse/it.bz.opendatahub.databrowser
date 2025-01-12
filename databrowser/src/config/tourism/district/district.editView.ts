import { EditViewConfig } from '../../../domain/datasetConfig/types';
import { CellComponent } from '../../../domain/cellComponents/types';
import { withOdhBaseUrl } from '../../utils';

export const districtEditView: EditViewConfig = {
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
          ],
        },
        {
          name: 'IDs',
          properties: [
            {
              title: 'ID',
              component: CellComponent.StringCell,
              fields: { text: 'Id' },
              class: 'break-all',
            },
            {
              title: 'Custom ID',
              component: CellComponent.StringCell,
              fields: { text: 'CustomId' },
              class: 'break-all',
            },
            {
              title: 'Siag ID',
              component: CellComponent.StringCell,
              fields: { text: 'SiagId' },
              class: 'break-all',
            },
            {
              title: 'Tourismverein ID',
              component: CellComponent.StringCell,
              fields: { text: 'TourismvereinId' },
              class: 'break-all',
            },
            {
              title: 'Region ID',
              component: CellComponent.StringCell,
              fields: { text: 'Region.Id' },
              class: 'break-all',
            },
            {
              title: 'Municipality ID',
              component: CellComponent.StringCell,
              fields: { text: 'Municipality.Id' },
              class: 'break-all',
            },
            {
              title: 'HGV ID',
              component: CellComponent.StringCell,
              fields: { text: 'hgv.id' },
              class: 'break-all',
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
              title: 'Is comune',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'IsComune' },
            },
            {
              title: 'Active',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'Active' },
            },
            {
              title: 'Active on SMG',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'SmgActive' },
            },
            {
              title: 'Active on Open Data Hub',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'OdhActive' },
              params: { preventChange: 'true' },
            },
            {
              title: 'Published on',
              component: CellComponent.ArrayCell,
              fields: { items: 'PublishedOn' },
            },
            {
              title: 'Visible in Search',
              component: CellComponent.ToggleCell,
              fields: { enabled: 'VisibleInSearch' },
            },
          ],
        },
        {
          name: 'Source',
          properties: [
            {
              title: 'Source',
              component: CellComponent.StringCell,
              fields: { text: 'Source' },
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
          name: '',
          properties: [
            {
              title: 'Meta Title',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'MetaTitle' },
            },
            {
              title: 'Meta Description',
              component: CellComponent.InputSingleLineCell,
              fields: { text: 'MetaDesc' },
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
              title: 'Get There Text',
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
          name: 'Images',
          properties: [
            {
              title: '',
              component: CellComponent.EditImageGalleryCell,
              fields: {
                images: 'ImageGallery',
              },
              params: {
                alt: 'ImageTitle.{language}',
                src: 'ImageUrl',
                name: 'ImageName',
                width: 'Width',
                height: 'Height',
                title: 'ImageTitle.{language}',
                description: 'ImageDesc.{language}',
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
      name: 'Location',
      slug: 'location',
      subcategories: [
        {
          name: 'Location',
          properties: [
            {
              title: 'Region / TVB',
              component: CellComponent.InputReferenceCell,
              fields: { value: 'Region.Id' },
              params: {
                url: withOdhBaseUrl(
                  '/v1/Location?language=en&type=null&showall=true'
                ),
                labelSelector: 'name',
                keySelector: 'id',
              },
              required: true,
            },
            {
              title: 'Municipality',
              component: CellComponent.InputReferenceCell,
              fields: { value: 'Municipality.Id' },
              params: {
                url: withOdhBaseUrl('/v1/Municipality?removenullvalues=false'),
                labelSelector: 'Detail.en.Title',
                keySelector: 'Id',
              },
              required: true,
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
      name: 'Tags',
      slug: 'tags',
      subcategories: [
        {
          name: 'Tags',
          properties: [
            {
              title: 'Open Data Hub Tags',
              component: CellComponent.ArrayCellTags,
              class: 'w-40',
              fields: {
                items: 'ODHTags',
              },
            },
            {
              title: 'SMG Tags',
              component: CellComponent.ArrayCellTags,
              class: 'w-40',
              fields: {
                items: 'SmgTags',
              },
            },
          ],
        },
      ],
    },
  ],
};
