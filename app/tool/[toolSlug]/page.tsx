import fs from 'fs';
import path from 'path';
import FaqsPage from './FaqsPage'; // 导入客户端组件

// 定义数据类型
interface Faq {
    question: string;
    answer: string;
}

interface ToolData {
    name: string;
    description: string;
    longDescription: string;
    url: string;
    screenshot: string;
    category: string;
    categorySlug: string;
    slug: string;
    categories: string;
    features: string[];
    faqs: Faq[];
}

// 定义动态路由的参数类型
interface ToolPageProps {
    params: {
        toolSlug: string;
    };
}

// 这个函数在构建时运行，用于生成静态路由
export async function generateStaticParams() {
    const toolsDirectory = path.join(process.cwd(), 'data/tools');
    const filenames = fs.readdirSync(toolsDirectory);
    return filenames.map(filename => ({
        toolSlug: filename.replace(/\.json$/, ''),
    }));
}

// 这个函数在构建时运行，用于获取页面的props
async function getToolData(slug: string): Promise<ToolData> {
    const filePath = path.join(process.cwd(), 'data/tools', `${slug}.json`);
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
}

// 这是一个服务器组件，它获取数据并传递给客户端组件
export default async function ToolPage({ params }: ToolPageProps) {
    const toolData = await getToolData(params.toolSlug);
    return <FaqsPage toolData={toolData} />;
}

export async function generateMetadata({ params }: ToolPageProps) {
  // 获取当前产品数据
  const toolData = await getToolData(params.toolSlug);

  // 基础URL（从环境变量获取，需在.env.local中配置）
  const baseUrl = "https://ainavdir.com";

  return {
    // 页面基础信息
    title: toolData.name,
    description: toolData.description,

    // Twitter卡片配置
    twitter: {
      card: "summary_large_image", // 大图卡片（推荐）
      title: toolData.name, // 卡片标题
      description: toolData.description, // 卡片描述（120字内）
      images: [
        {
          url: `${baseUrl}${toolData.screenshot}`, // 绝对URL
          width: 1280, // 推荐尺寸
          height: 800,
          alt: `${toolData.name} `, // 图片描述（SEO+无障碍）
        },
      ],
      // 可选：如果有单独的产品创作者账号
      creator: "@ainavdir",
    },

    // OpenGraph配置（适配Facebook/LinkedIn等）
    openGraph: {
      title: toolData.name,
      description: toolData.description,
      type: "website",
      url: `${baseUrl}/tool/${toolData.slug}`,
      images: [
        {
          url: `${baseUrl}${toolData.screenshot}`,
          width: 1280,
          height: 800,
          alt: `${toolData.name}`,
        },
      ],
    },

    // 规范链接（避免重复内容）
    alternates: {
      canonical: `/tool/${toolData.slug}`,
    },
  };
}