/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
declare namespace Express {
    export interface Request {
      userId: number;
      userName: string;
      userEmail: string;
      userIsAdm: boolean;
      id:number;
      age_interval:string;
      visual_impairment:string;
      education_level:string;
      sex:string;
      background_color:string;
      color_scheme:string;
      accuracy_questions:Array<string>;
      qualitative_1:Array<string>;
      qualitative_2:Array<string>;
      qualitative_3:Array<string>;
      qualitative_4:Array<string>;
    }

    export interface RequestProfiles {
      id:number;
      age_interval_0_20:number;
      age_interval_11_20:number;
      age_interval_21_30:number;
      age_interval_30_40:number;
      age_interval_50:number;
      visual_impairment_Astgmatismo:number;
      visual_impairment_Miopia:number;
      visual_impairment_nenhuma:number;
      education_level_Ens_Fundamental_Completo:number;
      education_level_Ens_Médio_Completo:number;
      education_level_Ens_Superior_Completo:number;
      education_level_Pós_Graduação_Completo:number;
      education_level_alfabetizado:number;
      sex_Feminino:number;
      sex_Masculino:number;
      background_color_dark:number;
      background_color_white:number
      color_scheme_Frio	:number;
      color_scheme_Neutro	:number;
      color_scheme_Quente	:number;
      fitness_bar:number;
      fitness_line:number;
      fitness_squared:number;
      fitness_circ:number;
      profile_answers:number;
      total_answers:number;
    }
  }
