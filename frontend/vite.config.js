import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: path.resolve('.', 'src')
			}
		]
	},
	server: {
		open: true,
		cors: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8000',
				ws: true, // 如果要代理 websockets，配置这个参数
				secure: false, // 如果是https接口，需要配置这个参数
				changeOrigin: true // 是否跨域
				// rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})
