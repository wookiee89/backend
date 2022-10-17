import { Injectable, NotFoundException } from '@nestjs/common';
import { ObservationsModel } from './observations.interface'

@Injectable()
export class ObservationsService {
    private observations: Array<ObservationsModel> = []

    public findAll(): Array<ObservationsModel>{
        return this.observations;
    }

    public findOne(id: number): ObservationsModel {
        const observation: ObservationsModel = this.observations.find(observation => observation.id === id);

        if (!observation){
            throw new NotFoundException('Observation not found');
        }

        return observation
    }
}
