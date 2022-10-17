import internal from "stream";

export interface ObservationsModel {
    id?: number;
    date: Date;
    observation: string;
    observationValue: number;
    observationMeasurement: string;
}
