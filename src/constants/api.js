//API configuration constants for openRouter integration

export const API_URL ='https://openrouter.ai/api/v1/chat/completions'

//Default headers sent with every API request

export const fallbackHeaders ={
	'Content-Type':'appliction/json',
	'X-Title':'AI-ASSISTANT OpenRouter Model',// Application identifier for OpenRouter
}

//Maximum number of character allowed in file attachments to avoid API limits
export const MAX_FILE_CHARS=12000