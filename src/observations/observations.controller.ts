import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ObservationsModel } from './observations.interface';
import { ObservationsService } from './observations.service';

@Controller('observations')
export class ObservationsController {
    constructor(private readonly observationsService: ObservationsService) {}

    @Get()
    public findAll(): Array<ObservationsModel>{
        return this.observationsService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id', ParseIntPipe) id: number): ObservationsModel {
        return this.observationsService.findOne(id);
    }
}
