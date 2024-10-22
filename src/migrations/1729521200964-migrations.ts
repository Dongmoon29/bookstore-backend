import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1729521200964 implements MigrationInterface {
    name = 'Migrations1729521200964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "books" (
                "id" SERIAL NOT NULL,
                "title" character varying NOT NULL,
                "author" character varying NOT NULL,
                "sales_count" integer NOT NULL,
                "description" character varying,
                CONSTRAINT "PK_f3f2f25a099d24e12545b70b022" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "books"
        `);
    }

}
