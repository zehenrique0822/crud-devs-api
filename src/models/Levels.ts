import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Developers from './Developers'

@Entity('levels')
class Levels {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    level: string

  @ManyToOne(() => Developers)
  @JoinColumn({ name: 'id', referencedColumnName: 'id_level' })
    developers: Developers[]
}

export default Levels
