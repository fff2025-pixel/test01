# Flashcards (TSV 上传生成并保留) — 示例实现

功能
- 在前端上传 TSV 文件（两列，表头：表达 / 解释）。
- 上传时客户端解析 TSV，去掉表头行并生成卡片，然后发送到后端保存为一个 Deck。
- 管理端 /admin 受 GitHub 登录保护，只有管理员（默认 `fff2025-pixel`）可以上传和删除 Deck。
- 数据使用 SQLite（Prisma）持久化。

快速开始
1. 克隆仓库并安装依赖：
   - yarn 或 npm
2. 配置环境变量（在根目录创建 `.env`）：
   - DATABASE_URL="file:./dev.db"
   - GITHUB_ID=your_github_oauth_app_client_id
   - GITHUB_SECRET=your_github_oauth_app_client_secret
   - NEXTAUTH_URL=http://localhost:3000
   - ADMIN_GITHUB_LOGIN=fff2025-pixel
3. 生成 Prisma 客户端并迁移：
   - npx prisma migrate dev --name init
4. 启动开发服务器：
   - npm run dev 或 yarn dev
5. 访问：
   - / 登录（使用 GitHub OAuth）
   - /admin 管理（仅管理员可见）
   - / 查看可用 Deck 列表
   - /decks/[id] 查看单个 Deck 和卡片

TSV 要求
- 文件为 TSV（Tab-separated values），第一行为表头，必须包含 “表达” 和 “解释” 两列（顺序不限）。
- 示例：
  表达\t解释
  hello\t你好

安全与生产化注意
- 当前示例使用 GitHub OAuth 限制管理员。生产建议：
  - 在 NextAuth 中使用数据库适配器（Prisma Adapter）以管理用户。
  - 加强 CSRF、速率限制、输入校验。
  - 用生产级数据库替换 SQLite（Postgres 等）。
  - 对托管的静态资源和备份做策略。

接下来
- 如果你确认想把这个部署到 Vercel 或自托管，我可以帮你：
  - 配置生产环境变量
  - 生成 Prisma 迁移脚本
  - 添加更完善的 UI（如卡片学习模式、重复间隔算法 SRS)