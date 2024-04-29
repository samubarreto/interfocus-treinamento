Objeto: Instâscia de um tipo por referência

**Abstração**: Ideia de abstrair algo do mundo real numa classe: (CRIAR CLASSES)

* Aluno: Nome, DataNascimento, RA;

**Encapsulamento**: (DEFINIR PROPRIEDADES DAS CLASSES DE FORMA CONTROLADA)

* Gets e sets, não sei o que fazem, mas posso usar. Set é chamado sempre que atribuído um valor a uma propriedade e get é chamado sempre que lido um valor de uma propriedade
* chama encapsulamento pois você não vê oq o get set fazem, mas fazem

**Herança**: (EXTENDS DO JAVA, ":" EM C#)

* Capacidade de usar as propriedades e métodos de uma classe dentro de outra classe
* EX: public class Gerente: Funcionario
* EX: /\ Gerente herda de Funcionário.. Gerente também é do tipo funcionário

**Polimorfismo**: (MÉTODO DO FILHO SOBRESCREVER OU ALTERAR MÉTODO DO PAI)

* **Polimorfismo de Substituição (ou Sobrescrita)** : Isso ocorre quando uma classe filha redefine um método de sua classe pai. A chamada do método é resolvida durante a execução para o método da classe filha.
* **Polimorfismo de Sobrecarga (ou Sobrecarga de Métodos)** : Isso acontece quando uma classe tem múltiplos métodos com o mesmo nome, mas com parâmetros diferentes. O método a ser chamado é decidido em tempo de compilação, baseado na assinatura do método.
* Override abaixo

```csharp
public override void PrintaDados()

{
Console.WriteLine("{0} {1} {2} {3:dd/MM/yyyy} ({4}%)",RA,NomeAluno,EmailAluno,Desconto);
}
```
