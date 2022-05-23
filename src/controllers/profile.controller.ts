/* eslint-disable max-len */
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
      await profileRepository.save(
        {

          age_interval_11_20: Math.round(Number(profile.age_interval_11_20)),
          age_interval_21_30: Math.round(Number(profile.age_interval_21_30)),
          age_interval_31_40: Math.round(Number(profile.age_interval_31_40)),
          visual_impairment_Astgmatismo: Math.round(Number(profile.visual_impairment_Astgmatismo)),
          visual_impairment_Miopia: Math.round(Number(profile.visual_impairment_Miopia)),
          visual_impairment_nenhuma: Math.round(Number(profile.visual_impairment_nenhuma)),
          education_level_Ens_Médio_Completo: Math.round(Number(profile.education_level_Ens_Médio_Completo)),
          education_level_Ens_Superior_Completo: Math.round(Number(profile.education_level_Ens_Superior_Completo)),
          education_level_Pós_Graduação_Completo: Math.round(Number(profile.education_level_Pós_Graduação_Completo)),
          education_level_alfabetizado: Math.round(Number(profile.education_level_alfabetizado)),
          sex_Feminino: Math.round(Number(profile.sex_Feminino)),
          sex_Masculino: Math.round(Number(profile.sex_Masculino)),
          background_color_dark: Math.round(Number(profile.background_color_dark)),
          background_color_white: Math.round(Number(profile.background_color_white)),
          color_scheme_Frio: Math.round(Number(profile.color_scheme_Frio)),
          color_scheme_Neutro: Math.round(Number(profile.color_scheme_Neutro)),
          color_scheme_Quente: Math.round(Number(profile.color_scheme_Quente)),
          fitness_bar: Math.round(Number(profile.fitness_bar)),
          fitness_line: Math.round(Number(profile.fitness_line)),
          fitness_squared: Math.round(Number(profile.fitness_squared)),
          fitness_circ: Math.round(Number(profile.fitness_circ)),
          total_answers: Math.round(Number(profile.total_answers)),

          education_level_of_profile: String(profile.education_level_of_profile),
          interval_age_of_profile: String(profile.interval_age_of_profile),
          bar_acc_amount: Math.round(Number(profile.bar_acc_amount)),
          line_acc_amount: Math.round(Number(profile.line_acc_amount)),
          squared_acc_amount: Math.round(Number(profile.squared_acc_amount)),
          circ_acc_amount: Math.round(Number(profile.circ_acc_amount)),
          bar_acc_amount_3_sections: Math.round(Number(profile.bar_acc_amount_3_sections)),
          bar_acc_amount_5_sections: Math.round(Number(profile.bar_acc_amount_5_sections)),
          bar_acc_amount_7_sections: Math.round(Number(profile.bar_acc_amount_7_sections)),
          line_acc_amount_3_sections: Math.round(Number(profile.line_acc_amount_3_sections)),
          line_acc_amount_5_sections: Math.round(Number(profile.line_acc_amount_5_sections)),
          line_acc_amount_7_sections: Math.round(Number(profile.line_acc_amount_7_sections)),
          squared_acc_amount_3_sections: Math.round(Number(profile.squared_acc_amount_3_sections)),
          squared_acc_amount_5_sections: Math.round(Number(profile.squared_acc_amount_5_sections)),
          squared_acc_amount_7_sections: Math.round(Number(profile.squared_acc_amount_7_sections)),
          circ_acc_amount_3_sections: Math.round(Number(profile.circ_acc_amount_3_sections)),
          circ_acc_amount_5_sections: Math.round(Number(profile.circ_acc_amount_5_sections)),
          circ_acc_amount_7_sections: Math.round(Number(profile.circ_acc_amount_7_sections)),
          quality_bar: Math.round(Number(profile.quality_bar)),
          quality_line: Math.round(Number(profile.quality_line)),
          quality_squared: Math.round(Number(profile.quality_squared)),
          quality_circ: Math.round(Number(profile.quality_circ)),
        },

      ).catch((error) => { console.log('-------------begin error------------'); console.log(error); });
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
