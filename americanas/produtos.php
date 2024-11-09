<?php

include "header.php";
include "dados.php";

?>

<main>
    <h1>Nossos Pordutos:</h1>
    <div class="grid">

        <?php
            foreach($produtos as $produto){
        
            ?>
                <!-- trecho do HTML -->
                <div class="coluna">
                    <img src="imagens/<?=$produto["imagem"]?>" alt="<?=$produto["nome"]?>">
                    <p>
                        <strong><?=$produto["nome"]?></strong><br>
                        R$ <?=$produto["valor"]?>
                    </p>
                    <p>
                        <a href="produto.php?id=<?=$produto["id"]?>=">Detalhes</a>
                    </p>
                </div>
            <?php
            }
            ?>
    </div>
</main>

<?php

include "footer.php";

?>