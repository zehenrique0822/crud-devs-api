import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import Levels from './Levels'

@Entity('developers')
class Developers {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    id_level: number

  @Column()
    name: string

  @Column()
    gender: string

  @Column()
    date_birth: Date

  @Column()
    age: number

  @Column()
    hobby: string

  @OneToOne(() => Levels, (level) => level.id)
  @JoinColumn({ name: 'id_level' })
    level: Levels
}

export default Developers
