import * as process from 'process';
import { config } from 'dotenv';
import { BooleanUtils } from './boolean.utils';
import { NumbersUtils } from '../../utils/numbers.utils';

config();

export const Envs = {
    // main: {
    //     host: process.env.APP_HOST || '0.0.0.0',
    //     appPort: NumbersUtils.toNumberOrDefault(process.env.APP_PORT, 3000),
    //     blackListTitles: process.env.FORBIDDEN_TITLES,
    // },

    postgres: {
        host: process.env.PG_HOST,
        port: NumbersUtils.toNumberOrDefault(process.env.PG_PORT, 5432),
        name: process.env.PG_DATABASE,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        migrationsRun: BooleanUtils.strToBoolWithDefault(process.env.PG_MIGRATIONS_RUN, false),
        logging: BooleanUtils.strToBoolWithDefault(process.env.PG_LOGGINING, false),
    },

    // swagger: {
    //     path: process.env.SWAGGER_PATH || 'docs',
    //     isWriteConfig: BooleanUtils.strToBoolWithDefault(process.env.SWAGGER_IS_WRITE_CONFIG, false),
    //     url: `http://localhost:${process.env.APP_PORT ?? 3000}`,
    //     description: 'development',
    // },

    // kafka: {
    //     host: process.env.KAFKA_HOST,
    //     port: process.env.KAFKA_EXTERNAL_PORT,
    //     user: String(process.env.KAFKA_CLIENT_USERS),
    //     password: String(process.env.KAFKA_USER_PASSWORD),
    //     kafkaIsConnect: BooleanUtils.strToBoolWithDefault(process.env.KAFKA_IS_CONNECT, false),
    // },

    // webdev: {
    //     host: process.env.WEBDAV_HOST,
    //     port: process.env.WEBDAV_PORT,
    //     user: String(process.env.USER_NAME_WEBDAV),
    //     password: String(process.env.PASSWORD_WEBDAV),
    // },
};
