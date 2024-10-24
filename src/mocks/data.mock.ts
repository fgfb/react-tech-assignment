import {DataType, ImportedDataType} from "../types";

export const MOCK_MAP_DATA: DataType = [
    {
        id: 1,
        engineerId: 123,
        notes: 'Lorem ipsum',
        coords: [8.75, -8.56]
    },
    {
        id: 2,
        engineerId: 223,
        notes: 'Vel illum qui',
        coords: [-1.2, 2.0]
    },
];

export const MOCK_IMPORT_MAP_DATA: ImportedDataType = {
    mapData: [
        {
            id: 1,
            engineerId: 123,
            status: 'Pending',
            startDate: '2021-01-01',
            endDate: '2022-01-12',
            information: 'Lorem ipsum',
            coords: {
                lat: 8.75,
                lng: -8.56,
            }
        }
    ]
};