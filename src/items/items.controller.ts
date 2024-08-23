import {Body, Controller, Get, Post, Req, Res, Param } from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {Response, Request} from 'express';

@Controller('items')
export class ItemsController {

    @Get()
    findAll(@Req() req: Request, @Res() res: Response): Response {
        console.log(req.url)
        return res.send('Hello World');
    };

    @Get(':id')
    findOne(@Param() param):string{
        return `Item ${param.id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto):string {
        return `Name :${createItemDto.name} Desc: ${createItemDto.description}`
    }
}
