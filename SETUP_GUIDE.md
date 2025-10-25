# Resume下載系統 - 設定指南

## 📁 **Resume文件放置**

1. 將你的resume PDF文件放在：
   ```
   /Users/ah/Documents/audreyhsiao.github.io/private/Audrey_Hsiao_Resume.pdf
   ```

2. 確保文件名完全一致：`Audrey_Hsiao_Resume.pdf`

## 🔐 **密碼設定**

### **本地測試**
創建 `.env.local` 文件（在項目根目錄）：
```bash
RESUME_PASSWORD=你想要的密碼
```

### **Vercel部署**
1. 登入 Vercel Dashboard
2. 選擇你的項目
3. 進入 Settings → Environment Variables
4. 添加：
   - Name: `RESUME_PASSWORD`
   - Value: `你想要的密碼`
   - Environment: Production, Preview, Development

### **Netlify部署**
1. 登入 Netlify Dashboard
2. 選擇你的網站
3. 進入 Site settings → Environment variables
4. 添加：
   - Key: `RESUME_PASSWORD`
   - Value: `你想要的密碼`

### **其他平台**
在相應平台的環境變量設定中添加：
```
RESUME_PASSWORD=你想要的密碼
```

## 🚀 **部署步驟**

1. **放置resume文件**：將PDF放在 `private/` 目錄
2. **設定密碼**：在部署平台添加環境變量
3. **部署網站**：推送代碼到你的託管平台
4. **測試功能**：訪問About Me頁面，點擊"Get Resume"按鈕

## 🔒 **安全建議**

- 使用強密碼（至少8位，包含字母、數字、符號）
- 不要將密碼提交到代碼庫
- 定期更換密碼
- 監控下載日誌

## 📝 **測試清單**

- [ ] Resume PDF文件已放置在 `private/` 目錄
- [ ] 文件名為 `Audrey_Hsiao_Resume.pdf`
- [ ] 環境變量 `RESUME_PASSWORD` 已設定
- [ ] 網站已部署
- [ ] 可以正常訪問About Me頁面
- [ ] "Get Resume"按鈕可以點擊
- [ ] 密碼輸入正確後可以下載
- [ ] 密碼錯誤時顯示錯誤訊息
- [ ] 手機版也能正常使用

## 🆘 **常見問題**

**Q: 為什麼看不到"Get Resume"按鈕？**
A: 檢查瀏覽器控制台是否有JavaScript錯誤

**Q: 點擊按鈕沒有反應？**
A: 確保JavaScript已正確加載

**Q: 輸入密碼後顯示"Server configuration error"？**
A: 檢查環境變量是否正確設定

**Q: 下載的文件不是PDF？**
A: 確保 `private/` 目錄中的文件是真實的PDF文件
