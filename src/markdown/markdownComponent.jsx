//Custom React components for rendering markdown content in the assistant response
import CodeBlock from "./CodeBlock";

// Helper function to create styled HTML elements with consistent className
const asTag = (Tag, className) => ({ children }) => <Tag className={className}>{children}</Tag>

// Configuration object mapping markdown elements to React components with custom styling
const markdownComponents = {
// Code block with syntax highlighting
code: CodeBlock,
//Tabels with horizontal scrolling for mobile
table: ({children})=>(
	<div className="overflow-x-auto">
		<table className="min-w-full border-collapse border-zinc-700 ">{children}</table>
	</div>
),
// Blockquotes with blue accent border
blockqoute:({children})=>(
	<blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-300 bg-zinc-800/50 p-2 pb-1 rounded-r-lb mb-3">
		{children}
	</blockquote>
),

}