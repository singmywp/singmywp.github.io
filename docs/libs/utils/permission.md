# snu.checkSystemPermissionGranted()

### **是否具备指定权限**

检查当前应用是否已经具备指定权限。

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称        | 类型     | 必填 | 默认值 | 描述                         |
| ----------- | -------- | ---- | ------ | ---------------------------- |
| permissions | Array\<String\> | 是   | -      | 需要检查的系统权限名称数组。 |

### 返回值

| 类型    | 必备 | 描述                                              |
| ------- | ---- | ------------------------------------------------- |
| Boolean | 是   | 如果所有权限都已授权，返回 true，否则返回 false。 |

### 示例

```typescript
const perms = ['android.permission.CAMERA', 'android.permission.INTERNET']
const granted = snu.checkSystemPermissionGranted(perms);
if (granted) {
  console.log('应用已具备所有指定权限');
} else {
  console.log('应用未具备所有指定权限');
}
```

---

# snu.getSystemPermissionDenied()

### **获取未授权的系统权限**

获取指定权限中未授权的权限。

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称        | 类型     | 必填 | 默认值 | 描述                         |
| ----------- | -------- | ---- | ------ | ---------------------------- |
| permissions | Array\<String\> | 是   | -      | 需要检查的系统权限名称数组。 |

### 返回值

| 类型     | 必备 | 描述                                                         |
| -------- | ---- | ------------------------------------------------------------ |
| Array\<String\> | 是   | 返回一个包含所有未授权权限名称的数组，如果所有权限都已授权，则返回空数组。 |

### 示例

```typescript
const perms = ['android.permission.CAMERA', 'android.permission.INTERNET']
const denied = snu.getSystemPermissionDenied(perms);
if (denied.length === 0) {
  console.log('应用已具备所有指定权限');
} else {
  console.log('应用未具备以下权限：', denied);
}
```

---

# snu.requestSystemPermission()

### **请求系统权限**

向用户请求指定的系统权限。

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称                | 类型                             | 必填 | 默认值 | 描述                                                         |
| ------------------- | -------------------------------- | ---- | ------ | ------------------------------------------------------------ |
| options             | `SnRequestSystemPermissionOptions` | 是   | -      | 请求权限的配置选项。                                         |
| options.permissions | Array\<String\>                    | 是   | -      | 需要请求的系统权限名称数组。                                 |
| options.success     | `(allRight: boolean, grantedList: string[])=>void` | 否   | -      | 请求权限成功时的回调函数，接受两个参数：allRight（所有权限是否都已授权）和 grantedList（已授权的权限列表）。 |
| options.fail        | `(doNotAskAgain: boolean, grantedList: string[])=>void` | 否   | -      | 请求权限失败时的回调函数，接受两个参数：doNotAskAgain（用户是否选择了不再询问）和 grantedList（已授权的权限列表）。 |

### 返回值

无

### 示例

```typescript
const perms = ['android.permission.CAMERA', 'android.permission.INTERNET']
snu.requestSystemPermission({
  permissions: perms,
  success: (allRight, grantedList) => {
    if (allRight) {
      console.log('应用已具备所有指定权限');
    } else {
      console.log('应用具备以下权限：', grantedList);
    }
  },
  fail: (doNotAskAgain, grantedList) => {
    if (doNotAskAgain) {
      console.log('用户选择了不再询问，应用具备以下权限：', grantedList);
    } else {
      console.log('权限请求失败，应用具备以下权限：', grantedList);
    }
  }
})
```

---

# snu.gotoSystemPermissionActivity()

### **跳转到系统权限设置页面**

跳转到操作系统的权限设置页面，以便用户可以直接在系统设置中管理应用权限。

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称        | 类型     | 必填 | 默认值 | 描述                                     |
| ----------- | -------- | ---- | ------ | ---------------------------------------- |
| permissions | Array\<String\> | 是   | -      | 需要用户在系统设置中管理的权限名称数组。 |

### 返回值

无

### 示例

```typescript
const perms = ['android.permission.CAMERA']
snu.gotoSystemPermissionActivity(perms);
```

---

# snu.requestMediaPermission()

### **请求媒体权限**

由于 Google 对于 Android 本地读写权限的保护的不断增强，应用适配高版本 Android 往往需要进行大量兼容判断。因此，此方法集成了媒体权限请求，可根据不同的Android版本，帮助开发者快速请求相应的媒体访问权限。目前已适配 Android 12 及以下版本、Android 13、Android 14 及以上版本。

:::warning 提示
需要注意的是，应用的 mainfest 文件中需要添加以下权限声明。
:::
```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />
<uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED" />
```

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称            | 类型                                                    | 必填 | 默认值 | 描述                                                         |
| --------------- | ------------------------------------------------------- | ---- | ------ | ------------------------------------------------------------ |
| options         | SnRequestMediaPermissionOptions                         | 是   | -      | 请求权限的配置选项。                                         |
| options.types   | Array\<String\>                                         | 是   | -      | 需要请求的媒体类型，可选值为 `image`, `video`, `audio`。     |
| options.success | `(allRight: boolean, grantedList: string[])=>void`      | 否   | -      | 请求权限成功时的回调函数                                     |
| options.fail    | `(doNotAskAgain: boolean, grantedList: string[])=>void` | 否   | -      | 请求权限失败时的回调函数，接受两个参数：doNotAskAgain（用户是否选择了不再询问）和 grantedList（已授权的权限列表）。 |

### 返回值

无

### 示例

```typescript
snu.requestMediaPermission({
  types: ['image', 'video'],
  success: (allRight, grantedList) => {
    if (allRight) {
      console.log('应用已具备所有指定媒体权限');
    }
  },
  fail: (doNotAskAgain, grantedList) => {
    //...
  }
})
```


---

# snu.checkMediaPermission()

### **检查媒体权限**

由于 Google 对于 Android 本地读写权限的保护的不断增强，应用适配高版本 Android 往往需要进行大量兼容判断。因此，此方法集成了媒体权限检查，可根据不同的Android版本，帮助开发者快速检查相应的媒体访问权限。目前已适配 Android 12 及以下版本、Android 13、Android 14 及以上版本。

:::warning 提示
需要注意的是，应用的 mainfest 文件中需要添加以下权限声明。
:::
```xml
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
<uses-permission android:name="android.permission.READ_MEDIA_VIDEO" />
<uses-permission android:name="android.permission.READ_MEDIA_AUDIO" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="32" />
<uses-permission android:name="android.permission.READ_MEDIA_VISUAL_USER_SELECTED" />
```

### 兼容性

| Web  | Android |
| ---- | ------- |
| ×    | √       |

### 属性

| 名称  | 类型            | 必填 | 默认值 | 描述                                                     |
| ----- | --------------- | ---- | ------ | -------------------------------------------------------- |
| types | Array\<String\> | 是   | -      | 需要请求的媒体类型，可选值为 `image`, `video`, `audio`。 |

### 返回值

| 类型    | 必备 | 描述                       |
| ------- | ---- | -------------------------- |
| Boolean | 是   | 是否所有媒体权限都已授权。 |

### 示例

```typescript
const granted = snu.checkMediaPermission(['image', 'video']);
if (granted) {
  console.log('应用已具备所有指定媒体权限');
}
```