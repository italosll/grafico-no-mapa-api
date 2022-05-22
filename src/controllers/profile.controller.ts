/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { RequestProfiles, Response } from 'express';
import { getRepository } from 'typeorm';
import { Profile } from '../entities/Profile';

export default {
  async create(request: RequestProfiles, response: Response) {
    const profileRepository = getRepository(Profile);
    console.log(request.body);
    const profiles = profileRepository.create(request.body);

    profiles.map(async (profile) => {
      await profileRepository.save(profile);
    });
    return response.json(profiles).status(201);
  },

  async read(request: RequestProfiles, response: Response) {
    const answerRepository = getRepository(Profile);
    const profiles = await answerRepository.find();
    return response.json(profiles);
  },

  async delete(request: RequestProfiles, response: Response) {
    const profileRepository = getRepository(Profile);
    const { id } = request.body;
    const profile = await profileRepository.findOne({ id });

    if (!profile) {
      return response.send({
        error: `Nenhuma resposta com id ${id}`,
      });
    }

    const deleteResponse = await profileRepository.delete(id);
    return response.send({ message: 'Resposta deletado com sucesso', deleteResponse });
  },
};
