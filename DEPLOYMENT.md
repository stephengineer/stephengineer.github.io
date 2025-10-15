# GitHub Pages 部署指南

## 🚀 部署步骤

### 1. 准备GitHub仓库

1. 在GitHub上创建一个新的仓库，命名为 `Personal-Website`
2. 将本地代码推送到GitHub：

```bash
# 初始化git仓库（如果还没有）
git init

# 添加远程仓库
git remote add origin https://github.com/你的用户名/Personal-Website.git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到main分支
git push -u origin main
```

### 2. 启用GitHub Pages

1. 进入你的GitHub仓库页面
2. 点击 `Settings` 标签
3. 在左侧菜单中找到 `Pages`
4. 在 `Source` 下选择 `GitHub Actions`
5. 保存设置

### 3. 自动部署

一旦你推送代码到main分支，GitHub Actions会自动：
- 安装依赖
- 构建项目
- 部署到GitHub Pages

### 4. 访问你的网站

部署完成后，你的网站将在以下地址可用：
```
https://你的用户名.github.io/Personal-Website/
```

## 🔧 手动部署（可选）

如果你想手动部署，可以使用以下命令：

```bash
# 构建项目
npm run build

# 使用部署脚本
chmod +x deploy.sh
./deploy.sh
```

## 📝 注意事项

1. **仓库名称**: 确保GitHub仓库名称为 `Personal-Website`
2. **分支名称**: 使用 `main` 分支
3. **文件路径**: 确保所有资源路径正确
4. **环境变量**: 生产环境会自动设置 `NODE_ENV=production`

## 🐛 故障排除

### 常见问题：

1. **404错误**: 检查vite.config.js中的base路径是否正确
2. **资源加载失败**: 确保所有静态资源路径正确
3. **构建失败**: 检查package.json中的依赖是否正确

### 调试步骤：

1. 检查GitHub Actions日志
2. 本地运行 `npm run build` 测试构建
3. 检查 `dist` 文件夹中的文件

## 📞 支持

如果遇到问题，请检查：
- GitHub Actions的运行日志
- 本地构建是否成功
- 仓库设置是否正确
