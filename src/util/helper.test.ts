import {mapImportedData} from "./helper";
import {ImportedDataType} from "../types";
import {MOCK_IMPORT_MAP_DATA} from "../mocks/data.mock";

describe('mapImportedData', () => {
    it('should map [mapData] correctly', () => {
        const result = mapImportedData(MOCK_IMPORT_MAP_DATA);

        expect(result).toEqual([{
            id: 1,
            engineerId: 123,
            notes: 'Lorem ipsum',
            coords: [8.75, -8.56]
        }]);
    });

    it('should return [empty array] when mapData is empty', () => {
        const importedData: ImportedDataType = {
            mapData: [],
        };
        const result = mapImportedData(importedData);

        expect(result).toEqual([]);
    });
});