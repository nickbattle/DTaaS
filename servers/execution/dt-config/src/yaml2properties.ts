
import * as fs from 'fs';
import * as yaml from 'js-yaml';

function printYaml(obj: any, prefix = ''): void
{
	if (typeof obj === 'object' && obj !== null)
	{
		for (const [key, value] of Object.entries(obj))
		{
			const newPrefix = prefix ? `${prefix}.${key}` : key;
			printYaml(value, newPrefix);
		}
	}
	else
	{
		console.log(`${prefix}=${obj}`);
	}
}

try
{
	const fileContents = fs.readFileSync('dt-config.yaml', 'utf8');
	const data = yaml.load(fileContents);
	printYaml(data);
}
catch (e)
{
	console.error('Error reading YAML:', e);
}
