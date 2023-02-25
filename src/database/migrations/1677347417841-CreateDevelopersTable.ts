import { Table, type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateDevelopersTable1677347417841 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'developers',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'id_level',
          type: 'int',
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'gender',
          type: 'char',
          isNullable: false
        },
        {
          name: 'date_birth',
          type: 'date',
          isNullable: false
        },
        {
          name: 'age',
          type: 'int',
          isNullable: false
        },
        {
          name: 'hobby',
          type: 'varchar',
          isNullable: false
        }
      ],
      foreignKeys: [
        {
          name: 'developers_fk_levels',
          columnNames: ['id_level'],
          referencedTableName: 'levels',
          referencedColumnNames: ['id']
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('developers')
  }
}
