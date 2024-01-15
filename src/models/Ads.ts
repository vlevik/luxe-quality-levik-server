import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';


@Table({
  modelName: 'Ads',
  tableName: 'ads',
  timestamps: false,
})
export class Ad extends Model {
	@Column({
    primaryKey: true,
    type: DataType.STRING,
    allowNull: false,
  })
  id: string;

	@Column({
		allowNull: false,
		type: DataType.STRING
	})
	title: string;

	@Column({
		allowNull: false,
		type: DataType.STRING
	})
	description: string;

	@Column({
		allowNull: false,
		type: DataType.STRING
	})
	image: string;

	@Column({
		allowNull: false,
		type: DataType.DECIMAL
	})
	price: number;

	@Column({
		allowNull: false,
		type: DataType.DECIMAL
	})
	long: number;

	@Column({
		allowNull: false,
		type: DataType.DECIMAL
	})
	lat: number;

	@Column({
		allowNull: false,
		type: DataType.STRING
	})
	city: string;

	@Column({
		allowNull: false,
		type: DataType.STRING
	})
	region: string;
}