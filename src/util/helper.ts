import {DataType, ImportedDataType} from "../types";

export function mapImportedData(importedData: ImportedDataType): DataType {
    return importedData.mapData.map(data => ({
        id: data.id,
        notes: data.information,
        engineerId: data.engineerId,
        coords: [data.coords.lat, data.coords.lng]
    }));
}