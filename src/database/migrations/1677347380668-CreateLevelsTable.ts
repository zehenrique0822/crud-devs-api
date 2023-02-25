import { Table, type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateLevelsTable1677347380668 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'levels',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'level',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('levels')
  }
}
