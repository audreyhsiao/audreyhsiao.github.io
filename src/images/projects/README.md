# 專案圖片使用指南 / Project Images Guide

## 📁 文件夾結構

將你的專案圖片放在這個資料夾中，建議命名格式：

```
src/images/projects/
├── artchat-1.png          # ArtChat 專案的第一張圖
├── artchat-2.png          # ArtChat 專案的第二張圖
├── artchat-3.png          # ArtChat 專案的第三張圖
├── pbif-1.png             # PBIF 專案圖片
├── pbif-2.png
├── blockchain-1.png       # 單張圖片範例
├── database-1.png
├── database-2.png
├── womenownedtaipei-1.png
├── womenownedtaipei-2.png
└── inventory-1.png
```

## 🎨 圖片建議

- **格式**: PNG, JPG, WebP
- **比例**: 16:9 (推薦)
- **大小**: 寬度 1200-1600px（會自動縮放）
- **檔案大小**: < 500KB（優化過的圖片加載更快）

## 🔧 如何添加圖片

在 `index.html` 中找到 `projectData` 物件，然後取消註解並修改 `images` 陣列：

### 範例 1: 添加 3 張圖片（ArtChat）

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

### 範例 2: 添加 2 張圖片（PBIF）

```javascript
pbif: {
  title: 'PBIF — Power BIOS Intelligence Fixed',
  // ... 其他資料 ...
  images: [
    'src/images/projects/pbif-1.png',
    'src/images/projects/pbif-2.png'
  ]
}
```

### 範例 3: 只添加 1 張圖片（Blockchain）

```javascript
blockchain: {
  title: 'Blockchain Anomaly Detection — GNN',
  // ... 其他資料 ...
  images: [
    'src/images/projects/blockchain-1.png'
  ]
}
```

### 範例 4: 沒有圖片

```javascript
inventory: {
  title: 'Inventory Optimization — (R, S)',
  // ... 其他資料 ...
  images: []  // 空陣列，modal 將隱藏圖片區塊
}
```

## ✅ 完成！

1. 將圖片放入 `src/images/projects/` 資料夾
2. 在 `index.html` 中取消註解並修改對應專案的 `images` 陣列
3. 重新載入網頁，點擊專案卡片，就能在 modal 中看到你的圖片了！

## 🎯 特色

- ✨ **靈活數量**: 每個專案可以有 0-3 張圖片（或更多）
- 📱 **響應式**: 自動適配桌面和手機屏幕
- 🖼️ **懸停效果**: 圖片懸停時會輕微放大
- ⚡ **懶加載**: 圖片使用 `loading="lazy"` 優化性能
- 🎨 **16:9 比例**: 自動維持統一的圖片比例

## 💡 提示

- 如果某個專案沒有圖片，整個圖片區塊會自動隱藏
- 圖片會按照陣列順序顯示（左到右、上到下）
- 可以混合使用不同數量的圖片，不影響布局

