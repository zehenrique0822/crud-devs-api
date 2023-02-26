import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Developers from './Developers'

@Entity('levels')
class Levels {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    level: string

  @OneToMany(() => Developers, developer => developer.level)
    developers: Developers[]
}

export default Levels
