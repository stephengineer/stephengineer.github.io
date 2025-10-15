# 安装和运行说明

## 前置要求

确保您的系统已安装以下软件：

1. **Node.js** (版本 16 或更高)
   - 下载地址: https://nodejs.org/
   - 推荐使用 LTS 版本

2. **npm** (通常随 Node.js 一起安装)

## 安装步骤

1. **克隆或下载项目**
   ```bash
   # 如果使用 git
   git clone <repository-url>
   cd Personal-Website
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   ```

5. **预览生产版本**
   ```bash
   npm run preview
   ```

## 常见问题

### 问题1: npm 命令未找到
**解决方案**: 确保已正确安装 Node.js 和 npm

### 问题2: 依赖安装失败
**解决方案**: 
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题3: 端口被占用
**解决方案**: Vite 会自动选择可用端口，或手动指定端口
```bash
npm run dev -- --port 3001
```

## 项目结构

```
Personal-Website/
├── src/
│   ├── components/     # Vue 组件
│   ├── assets/        # 静态资源
│   └── App.vue        # 主应用组件
├── public/            # 公共资源
├── index.html         # HTML 模板
├── vite.config.js     # Vite 配置
└── package.json       # 项目配置
```

## 开发建议

1. 使用现代浏览器进行开发
2. 建议使用 VS Code 作为编辑器
3. 安装 Vue 3 相关扩展以获得更好的开发体验
