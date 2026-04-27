# UI 视觉效果增强总结

## 已添加的 3D 和视觉效果

### 1. 3D 卡片悬停效果 (3D Card Hover Effects)
- **位置**: Landing、Purchase、Versions 页面的所有卡片
- **效果**: 
  - 鼠标移动时卡片根据鼠标位置进行 3D 透视旋转
  - 使用 `perspective(1000px)` 和 `rotateX/rotateY` 实现真实的 3D 效果
  - 平滑的过渡动画

### 2. 动画渐变背景 (Animated Gradient Backgrounds)
- **位置**: 所有页面的 Hero 区域
- **效果**:
  - 浮动的彩色光球 (使用 `animate-float` 和 `animate-float-delayed`)
  - 脉冲动画的渐变背景 (`animate-pulse-slow`)
  - 流动的渐变效果 (`animate-gradient`)

### 3. 闪光效果 (Shimmer Effects)
- **位置**: Purchase 页面的定价卡片、Versions 页面的版本卡片
- **效果**:
  - 鼠标悬停时从左到右的光泽扫过效果
  - 使用 `animate-shimmer` 关键帧动画

### 4. 发光动画 (Glow Animation)
- **位置**: Purchase 页面的徽章标签
- **效果**:
  - 持续的发光脉冲效果
  - 使用 `animate-glow` 创建呼吸灯效果

### 5. 渐变叠加层 (Gradient Overlays)
- **位置**: 所有卡片组件
- **效果**:
  - 鼠标悬停时显示的渐变色叠加
  - 从主色到透明的平滑过渡
  - 增强视觉深度

### 6. 微交互动画 (Micro-interactions)
- **技术图标**: 悬停时旋转 360 度
- **步骤数字**: 悬停时放大并轻微旋转
- **下载按钮**: 悬停时上移和阴影增强
- **卡片**: 悬停时整体上移和阴影变化

### 7. 玻璃态效果 (Glassmorphism)
- **位置**: Versions 页面背景、开源统计卡片
- **效果**:
  - 半透明背景
  - 背景模糊 (`backdrop-blur`)
  - 边框发光

### 8. 粒子/光晕效果 (Particle/Glow Effects)
- **位置**: Hero 图片轮播、FAQ 区域
- **效果**:
  - 多层模糊光晕
  - 动态位置变化
  - 柔和的颜色扩散

## 自定义 CSS 动画

在 `src/index.css` 中添加了以下关键帧动画：

1. **@keyframes float** - 浮动动画（8秒循环）
2. **@keyframes float-delayed** - 延迟浮动动画（10秒循环）
3. **@keyframes gradient** - 渐变位置动画（8秒循环）
4. **@keyframes pulse-slow** - 慢速脉冲（4秒循环）
5. **@keyframes shimmer** - 闪光扫过（3秒循环）
6. **@keyframes glow** - 发光效果（2秒循环）

## 性能优化

- 使用 `transform-gpu` 启用 GPU 加速
- 使用 `will-change` 提示浏览器优化
- 动画使用 `transform` 和 `opacity` 而非布局属性
- 合理使用 `viewport={{ once: true }}` 避免重复动画

## 浏览器兼容性

所有效果使用现代 CSS 和 Framer Motion，支持：
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## 查看效果

开发服务器: http://localhost:3001/rrdis-web/

访问以下页面查看效果：
- 首页 (Landing): `/`
- 版本页面 (Versions): `/versions`
- 购买页面 (Purchase): `/purchase`
