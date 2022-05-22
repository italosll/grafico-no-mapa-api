/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

  @Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ default: 0 })
    age_interval_0_10:number;

    @Column({ default: 0 })
    age_interval_11_20:number;

    @Column({ default: 0 })
    age_interval_21_30:number;

    @Column({ default: 0 })
    age_interval_31_40:number;

    @Column({ default: 0 })
    age_interval_41_50:number;

    @Column({ default: 0 })
    age_interval_51_plus:number;

    @Column({ default: 0 })
    visual_impairment_Astgmatismo:number;

    @Column({ default: 0 })
    visual_impairment_Miopia:number;

    @Column({ default: 0 })
    visual_impairment_nenhuma:number;

    @Column({ default: 0 })
    education_level_Ens_Médio_Completo:number;

    @Column({ default: 0 })
    education_level_Ens_Fundamental_Completo:number;

    @Column({ default: 0 })
    education_level_Ens_Superior_Completo:number;

    @Column({ default: 0 })
    education_level_Pós_Graduação_Completo:number;

    @Column({ default: 0 })
    education_level_alfabetizado:number;

    @Column({ default: 0 })
    sex_Feminino:number;

    @Column({ default: 0 })
    sex_Masculino:number;

    @Column({ default: 0 })
    background_color_dark:number;

    @Column({ default: 0 })
    background_color_white:number

    @Column({ default: 0 })
    color_scheme_Frio:number;

    @Column({ default: 0 })
    color_scheme_Neutro:number;

    @Column({ default: 0 })
    color_scheme_Quente:number;

    @Column()
    fitness_bar:number;

    @Column()
    fitness_line:number;

    @Column()
    fitness_squared:number;

    @Column()
    fitness_circ:number;

    @Column()
    total_answers:number;

    @Column()
    education_level_of_profile:string;

    @Column()
    interval_age_of_profile: string;

    @Column()
    bar_acc_amount: number;

    @Column()
    line_acc_amount: number;

    @Column()
    squared_acc_amount: number;

    @Column()
    circ_acc_amount: number;

    @Column()
    bar_acc_amount_3_sections: number;

    @Column()
    bar_acc_amount_5_sections: number;

    @Column()
    bar_acc_amount_7_sections: number;

    @Column()
    line_acc_amount_3_sections: number;

    @Column()
    line_acc_amount_5_sections: number;

    @Column()
    line_acc_amount_7_sections: number;

    @Column()
    squared_acc_amount_3_sections: number;

    @Column()
    squared_acc_amount_5_sections: number;

    @Column()
    squared_acc_amount_7_sections: number;

    @Column()
    circ_acc_amount_3_sections: number;

    @Column()
    circ_acc_amount_5_sections: number;

    @Column()
    circ_acc_amount_7_sections: number;

    @Column()
    quality_bar:number;

    @Column()
    quality_line:number;

    @Column()
    quality_squared:number;

    @Column()
    quality_circ:number;
}

// "age_interval_0_10":3,
// "age_interval_11_20":3,
// "age_interval_21_30":3,
// "age_interval_31_40":3,
// "age_interval_41_50":3,
// "age_interval_51_plus":3,
// "visual_impairment_Astgmatismo":3,
// "visual_impairment_Miopia":3,
// "visual_impairment_nenhuma":3,
// "education_level_Ens_Médio_Completo":3,
// "education_level_Ens_Fundamental_Completo":3,
// "education_level_Ens_Superior_Completo":3,
// "education_level_Pós_Graduação_Completo":3,
// "education_level_alfabetizado":3,
// "sex_Feminino":3,
// "sex_Masculino":3,
// "background_color_dark":3,
// "background_color_white":3,
// "color_scheme_Frio":3,
// "color_scheme_Neutro":3,
// "color_scheme_Quente":3,
// "fitness_bar":3,
// "fitness_line":3,
// "fitness_squared":3,
// "fitness_circ":3,
// "profile_amount_answers":3,
// "total_answers":3
// "education_level_of_profile":""
// "interval_age_of_profile":""
