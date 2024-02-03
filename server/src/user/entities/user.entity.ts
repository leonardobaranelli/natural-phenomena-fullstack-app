import { Column, Table, Model, DataType, Default, PrimaryKey } from "sequelize-typescript";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Table({ tableName: 'User' })
export class User extends Model<User> {
    @Default(DataType.UUIDV4)
    @PrimaryKey
    @Column({ type: DataType.UUID, allowNull: false }) 
    id: string;

    @Column({ allowNull: false })    
    @IsNotEmpty()
    @IsString()
    name: string;

    @Column({ allowNull: false, unique: true })    
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Column({ allowNull: false })    
    @IsNotEmpty()
    @IsString()
    password: string;
}
