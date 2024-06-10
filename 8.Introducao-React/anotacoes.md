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

### Promise

*Promise* é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. Uma promise pode estar em um dos três estados:

* **Pending (Pendente):** Estado inicial, ainda não completado ou rejeitado.
* **Fulfilled (Realizado):** A operação foi concluída com sucesso.
* **Rejected (Rejeitado):** A operação falhou.

Uso comum:

```javascript
let promise = new Promise((resolve, reject) => {
    // operação assíncrona
    let sucesso = true;
    if (sucesso) {
        resolve("Operação bem-sucedida!");
    } else {
        reject("Operação falhou!");
    }
});

```

### Fetch

*Fetch* é uma função global do JavaScript usada para fazer requisições HTTP assíncronas. Ela retorna uma promise que resolve para a resposta da solicitação (Response object), que pode ser manipulada para extrair dados, como JSON ou texto.

* É usado principalmente para obter recursos de um servidor.

Uso comum:

```javascript
<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copiar código</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">fetch('https://api.example.com/data')
    .then(response => response.json()) // transforma a resposta em JSON
    .then(data => console.log(data)) // manipula os dados recebidos
    .catch(error => console.error('Erro na operação fetch:', error));
</code></div></div></pre>
```

### Then

*Then* é um método de um objeto Promise. Ele é usado para definir callbacks que serão executados quando a promise for resolvida ou rejeitada. O método `then` aceita dois argumentos:

* O primeiro é uma função que será chamada quando a promise for realizada (fulfilled).
* O segundo é uma função opcional que será chamada se a promise for rejeitada (rejected).

Uso comum:

```javascript
<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copiar código</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">promise.then((message) => {
    console.log(message); // "Operação bem-sucedida!"
}).catch((error) => {
    console.error(error); // "Operação falhou!"
});
</code></div></div></pre>
```

### Await

*Await* é uma palavra-chave usada dentro de funções assíncronas (`async`) para esperar pela resolução de uma promise. Ela pausa a execução da função assíncrona até que a promise seja resolvida.

* Facilita a leitura de código assíncrono, parecendo mais síncrono.

Uso comum:

```javascript
<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copiar código</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro:', error);
    }
}

fetchData();
</code></div></div></pre>
```

### Async

*Async* é uma palavra-chave usada para declarar uma função assíncrona, que retorna implicitamente uma promise. Quando uma função é marcada com `async`, ela pode usar `await` para esperar pela resolução de promises dentro de seu corpo.

* Facilita o gerenciamento de código assíncrono.

Uso comum:

```javascript
<pre><div class="dark bg-gray-950 rounded-md border-[0.5px] border-token-border-medium"><div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><div class="flex items-center"><span class="" data-state="closed"><button class="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm"><path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path></svg>Copiar código</button></span></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
}

fetchData();
</code></div></div></pre>
```

### Resumo Detalhado:

* **Promise:** Um objeto que representa uma operação assíncrona e seus estados (pendente, realizada, rejeitada).
* **Fetch:** Uma função que faz requisições de rede e retorna uma promise que resolve para a resposta da solicitação.
* **Then:** Um método usado para lidar com a resolução de promises, permitindo definir callbacks para sucesso e falha.
* **Await:** Pausa a execução de uma função assíncrona até que uma promise seja resolvida, tornando o código assíncrono mais legível.
* **Async:** Declara uma função assíncrona que retorna uma promise, permitindo o uso de `await` para operações assíncronas sequenciais.
