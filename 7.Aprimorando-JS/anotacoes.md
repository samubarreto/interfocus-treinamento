* ioc - inversion of control
* isectionfactory (configurar serviços)
* * serve pra definir oq os bgls fazem
* builder.Services.AddControllers();
* * pra dizer q tamo usando controllers e não aquelas funções estranhas

public CursoController(ISessionFactory session)
{
    this.session = session;
}

serve pro nhibernate usar o mapeamento da tabela em mapping > curso.hbm.xml