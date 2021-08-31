# 数据字段标准值字典

## 国家标准化

结构如下：

```json
{
  "_original_str": {
    "normal": "NORMAL STR",
    "name": "某国",
    "code": "AB",
    "code3": "ABC",
    "num": "123"
  }
}
```

- key 是经过 `pureCountry`（见data-norm项目）处理过的原始值
- `normal` 标准英文名
- `name` 标准中文名
- `code` 两位国家代码
- `code3` 三位国家代码
- `num` 三位数字码