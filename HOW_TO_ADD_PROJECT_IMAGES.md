# 如何為專案添加圖片 / How to Add Project Images

## 快速上手 / Quick Start

### 步驟 1: 準備圖片
將你的專案圖片放到這個資料夾：
```
src/images/projects/
```

建議命名格式：
- `artchat-1.png`, `artchat-2.png`, `artchat-3.png`
- `pbif-1.png`, `pbif-2.png`
- `blockchain-1.png`
- 等等...

### 步驟 2: 更新 index.html

在 `index.html` 中找到你要更新的專案（約在第 133-310 行），然後取消註解 `images` 陣列並填入圖片路徑。

#### 範例：為 ArtChat 添加 3 張圖片

**之前（註解狀態）：**
```javascript
artchat: {
  title: 'ArtChat — Vision-Language AI Guide',
  // ... 其他資料 ...
  images: [
    // 'src/images/projects/artchat-1.png',
    // 'src/images/projects/artchat-2.png',
    // 'src/images/projects/artchat-3.png'
  ]
}
```

**之後（取消註解並確認路徑）：**
```javascript
artchat: {
  title: 'ArtChat — Vision-Language AI Guide',
  // ... 其他資料 ...
  images: [
    'src/images/projects/artchat-1.png',
    'src/images/projects/artchat-2.png',
    'src/images/projects/artchat-3.png'
  ]
}
```

### 步驟 3: 測試

1. 儲存 `index.html`
2. 重新載入網頁
3. 點擊 ArtChat 專案卡片
4. 在 modal 底部應該可以看到你的圖片！

---

## 靈活數量範例 / Flexible Image Count Examples

### 🎨 3 張圖片（推薦）
```javascript
womenownedtaipei: {
  // ...
  images: [
    'src/images/projects/womenownedtaipei-1.png',
    'src/images/projects/womenownedtaipei-2.png',
    'src/images/projects/womenownedtaipei-3.png'
  ]
}
```

### 🖼️ 2 張圖片
```javascript
pbif: {
  // ...
  images: [
    'src/images/projects/pbif-1.png',
    'src/images/projects/pbif-2.png'
  ]
}
```

### 📷 1 張圖片
```javascript
blockchain: {
  // ...
  images: [
    'src/images/projects/blockchain-1.png'
  ]
}
```

### ❌ 沒有圖片（隱藏圖片區塊）
```javascript
inventory: {
  // ...
  images: []
}
```

---

## 圖片規格建議 / Image Specifications

| 項目 | 建議值 |
|------|--------|
| **格式** | PNG, JPG, WebP |
| **比例** | 16:9 (例如：1920×1080, 1600×900) |
| **寬度** | 1200-1600px |
| **檔案大小** | < 500KB（建議壓縮） |
| **DPI** | 72-96 (網頁用) |

---

## 目前專案狀態 / Current Project Status

以下是所有專案及其圖片狀態：

| 專案 | Project ID | 建議圖片數量 | 狀態 |
|------|-----------|------------|------|
| ArtChat | `artchat` | 3 | ⚪ 待添加 |
| PBIF | `pbif` | 2 | ⚪ 待添加 |
| Blockchain GNN | `blockchain` | 1-2 | ⚪ 待添加 |
| Database System | `database` | 2 | ⚪ 待添加 |
| Women Owned Taipei | `womenownedtaipei` | 3 | ⚪ 待添加 |
| Inventory Optimization | `inventory` | 1 | ⚪ 待添加 |

當你添加圖片後，可以更新這個表格的狀態為 ✅。

---

## 技術細節 / Technical Details

### 自動化特性

✅ **動態顯示**: 有圖片就顯示，沒圖片就隱藏整個區塊  
✅ **響應式布局**: 桌面 2-3 欄，平板 2 欄，手機 1 欄  
✅ **懶加載**: 使用 `loading="lazy"` 優化性能  
✅ **懸停效果**: 圖片懸停時輕微放大 (scale 1.05)  
✅ **統一比例**: 所有圖片保持 16:9 並自動裁切適配  

### CSS 網格系統

```css
.modal-images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

這意味著：
- 每張圖片最小 250px 寬
- 自動計算每行可以放幾張圖片
- 如果空間不夠，會自動換行

---

## 常見問題 / FAQ

### Q: 我可以添加超過 3 張圖片嗎？
**A:** 可以！只需在 `images` 陣列中繼續添加即可。網格會自動調整。

### Q: 圖片必須是 16:9 嗎？
**A:** 不必須，但建議使用 16:9 以保持一致性。其他比例的圖片會被自動裁切填充（`object-fit: cover`）。

### Q: 可以混合不同數量的圖片嗎？
**A:** 完全可以！每個專案的圖片數量是獨立的。

### Q: 圖片路徑錯誤怎麼辦？
**A:** 圖片會無法顯示（顯示破圖圖示）。請檢查：
1. 圖片確實存在於 `src/images/projects/` 資料夾
2. 檔案名稱拼寫正確（包括副檔名）
3. 路徑以 `src/images/projects/` 開頭

### Q: 如何優化大圖片？
**A:** 使用線上工具如：
- [TinyPNG](https://tinypng.com/) - PNG/JPG 壓縮
- [Squoosh](https://squoosh.app/) - 進階圖片優化
- [ImageOptim](https://imageoptim.com/) - Mac 應用程式

---

## 需要幫助？

如果遇到問題，檢查瀏覽器的開發者工具（F12）→ Console 是否有錯誤訊息。

常見錯誤：
- `404 Not Found` → 圖片路徑錯誤
- `Failed to load resource` → 圖片檔案不存在或權限問題

