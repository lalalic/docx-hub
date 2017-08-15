const esprima=require("esprima")
import Variant from "./variant"

export default class If extends Variant{
	static type="variant.if"

	constructor(){
		super(...arguments)

		let codeBlock=this.code.body[0].consequent.body
		while(!Array.isArray(codeBlock))//if()with(){}
			codeBlock=codeBlock.body

		const {consequent,alternate}=esprima.parse(`
			if(a){
				${this.object}.assemble(docx, $('${this.selector}'),true)
			}else{
				${this.object}.assemble(docx, $('${this.selector}'),false)
			}
		`).body[0]

		codeBlock.push(consequent.body[0])
		this.children.forEach(a=>codeBlock.push(a.code))

		this.code.body[0].alternate=alternate
	}

	assemble(docx, node, satified){
		if(!satified)
			node.remove()
	}
}
