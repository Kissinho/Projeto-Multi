export class ILista {
    map(arg0: (item: any) => ILista): never[] {
      throw new Error('Method not implemented.')
    }
    id!: number
    tarefa!: string
    concluida!: boolean

    constructor(id:number, tarefa:string, concluida:boolean){
        this.id=id,
        this.tarefa = tarefa,
        this.concluida = concluida
    }
    
}
