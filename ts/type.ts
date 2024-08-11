/**
 * 实体类型，其中：
 * - machine 代表机关
 * - collection 代表采集物
 * - treasure 代表宝箱
 * - animal 代表动物* 
 */
enum EEntityType {
    /** 机关 */
    Machine = 'machine',

    /** 采集物 */
    Collection = 'collection',

    /** 宝箱 */
    Treasure = 'treasure',

    /** 动物 */
    Animal = 'animal',
}

/**
 * 实体的结构定义
 * @examples require("./type").entityExample
 */
export interface IEntity {
    /** id，全局唯一 */
    id: number;

    /** 名称 */
    name: string;

    /** 类型
     * @default EEntityType.Entity
    */
    type: EEntityType;
}

export const entityExample: IEntity[] = [{
    id: 1,
    name: 'example',
    type: EEntityType.Machine,
}];