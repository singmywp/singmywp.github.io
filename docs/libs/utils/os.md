# snu.vibrate()

### **振动设备**

使振动器产生振动。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型   | 必填 | 默认值 | 描述                   |
| ---- | ------ | ---- | ------ | ---------------------- |
| time | Number | 否   | 200    | 振动持续时间（毫秒）。 |

### 返回值

无

### 示例

```typescript
snu.vibrate();
```

---

# snu.share()

### **系统分享**

调用系统分享功能，分享文本、图片、视频、音频、文档等任何文件至其他应用。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称   | 类型          | 必填 | 默认值 | 描述     |
| ------ | ------------- | ---- | ------ | -------- |
| config | [SnShareConfig](/api/types/api#snshareconfig) | 是   | -      | 分享配置 |

### 返回值

无

### 示例

```typescript
snu.share({
    type: 'image',
    path: '/static/logo.png'
} as SnShareConfig);
```


# snu.chooseMedia()

### **选择媒体文件**

允许用户调用系统界面从设备选择图片或视频文件。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称    | 类型                             | 必填 | 描述             |
| ------- | -------------------------------- | ---- | ---------------- |
| options | [SnChooseMediaOptions](/api/types/api#snchoosemediaoptions) | 是   | 媒体选择配置对象。 |

### 返回值

无

### 示例

```typescript
snu.chooseMedia({
    type: 'image',
	success: (files: SnFile[]) => {
        console.log('选择的图片:', files)
    }
});
```