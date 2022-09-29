import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1664449422707 implements MigrationInterface {
    name = 'migrations1664449422707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" ADD "author_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog" DROP COLUMN "author_id"`);
    }

}
