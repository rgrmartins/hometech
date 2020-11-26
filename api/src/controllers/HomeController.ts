import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import { Home } from '../entity/Home';

class HomeController {
    async getAll(_: Request, res: Response) {
      const houseRepository = getRepository(Home);
      const houses = await houseRepository.find();
      
      if (houses.length === 0) {
        return res.json({ message: 'Nenhuma residência encontrada!' });
      }
      
      return res.json(houses);
    }
    async createHouse(req: Request, res: Response): Promise<any> {
        const houseRepository = getRepository(Home);
        
        //Shape da Validação
        const schema = Yup.object().shape({
          cep: Yup.string().required(),
          numero: Yup.number().required(),
          latitude: Yup.number().required(),
          longitude: Yup.number().required(),
          residentes: Yup.number().required(),
        });

        // Validação do body com o shape
        if (!(await schema.isValid(req.body))) {
          return res.status(400).json({ error: 'Validation fails' });
        }

        // Busca se existe uma residencia ja cadastrada na mesma latitude e longitude
        const houseExist = await houseRepository.find({
            where: { latitude: req.body.latitude, longitude: req.body.longitude }
        });

        // Retornando erro caso ja exista a casa cadastrada
        if (houseExist.length > 0) {
            return res.status(400).json({ error: 'House already exists' });
        }

        // salva a residência
        const house = await houseRepository.save(req.body);
        
        return res.json(house);
    }
}
export default new HomeController();
