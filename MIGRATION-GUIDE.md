# 迁移到 stephengineer.github.io 指南

## 🎯 目标
将当前项目迁移到 `stephengineer.github.io`，实现无后缀的URL：
- **当前**: `https://stephengineer.github.io/Personal-Website/`
- **目标**: `https://stephengineer.github.io/`

## 📋 迁移步骤

### 1. 创建用户页面仓库

#### 通过GitHub Web界面：
1. 访问 [GitHub.com](https://github.com)
2. 点击右上角的 "+" 按钮
3. 选择 "New repository"
4. **重要设置**：
   - Repository name: `stephengineer.github.io`
   - Description: `Stephen Wang's Personal Website`
   - 选择 **Public**
   - ❌ **不要**勾选 "Add a README file"
   - ❌ **不要**勾选 "Add .gitignore"
   - ❌ **不要**勾选 "Choose a license"
5. 点击 "Create repository"

### 2. 更新本地配置

#### 更新vite.config.js：
```javascript
// 已更新为：
base: '/',
```

#### 更新所有内部链接：
- 移除所有 `/Personal-Website/` 前缀
- 确保相对路径正确

### 3. 推送代码到新仓库

```bash
# 添加新的远程仓库
git remote add user-page https://github.com/stephengineer/stephengineer.github.io.git

# 推送代码到用户页面仓库
git push user-page master

# 可选：设置默认远程仓库
git remote set-url origin https://github.com/stephengineer/stephengineer.github.io.git
```

### 4. 配置GitHub Pages

1. 进入新仓库 `stephengineer.github.io`
2. 点击 "Settings" 标签
3. 滚动到 "Pages" 部分
4. Source: 选择 "Deploy from a branch"
5. Branch: 选择 "master"
6. Folder: 选择 "/ (root)"
7. 点击 "Save"

### 5. 等待部署

- GitHub Actions会自动构建和部署
- 通常需要2-10分钟
- 访问 `https://stephengineer.github.io/` 查看结果

## 🔄 回滚方案

如果迁移出现问题，可以：

1. **保留原仓库**: `Personal-Website` 仓库继续工作
2. **修复配置**: 更新vite.config.js的base路径
3. **重新推送**: 推送到正确的仓库

## ✅ 迁移后的优势

- 🎯 **简洁URL**: `https://stephengineer.github.io/`
- 🚀 **专业外观**: 更像个人品牌网站
- 📱 **易于分享**: 更短的链接
- 🔍 **SEO友好**: 根域名权重更高
- 💼 **职业形象**: 符合学术/专业标准

## 🛠️ 技术细节

### GitHub Pages类型对比：

| 类型 | 仓库名 | URL格式 | 限制 |
|------|--------|---------|------|
| 用户页面 | `username.github.io` | `https://username.github.io/` | 每用户一个 |
| 项目页面 | 任意名称 | `https://username.github.io/project/` | 无限制 |

### 配置变更：
- `base: '/Personal-Website/'` → `base: '/'`
- 所有资源路径自动调整
- GitHub Actions工作流无需修改

## 📞 支持

如果遇到问题：
1. 检查GitHub Actions日志
2. 确认仓库设置正确
3. 验证vite.config.js配置
4. 查看浏览器控制台错误
