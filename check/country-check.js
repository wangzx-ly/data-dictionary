/**
 * @author hgd
 * @date 2020/12/30
 * @description 此脚本检查数据是否存在不一致的情况。如：code相同，name不同；name相同，normal不同等。
 * 手动修改 normalizedCountries.json 或 Ts-tool 未更新到新版本的，需要运行此脚本进行验证
 * @LastEditTime
 */
const countryMapping = require('../normalizedCountries.json')

const all = {}
const fields = ['normal', 'name', 'code', 'code3', 'num']
// 一次遍历判断所有可能存在的不一致问题
for (const normItem of Object.values(countryMapping)) {
    for (let field of fields) {
        const k = normItem[field]
        const oldVal = all[k]
        const fieldJoin = normItem['normal'] + ',' + normItem['name'] + ',' + normItem['code'] + ',' + normItem['code3'] + ',' + normItem['num']
        if (oldVal) {
            if (oldVal !== fieldJoin) {
                throw new Error("不一致！" + oldVal + "\t" + fieldJoin)
            }
        } else {
            all[k] = fieldJoin
        }
    }
}
