// Embedded banned books data
const BANNED_BOOKS_DATA = [{"title":"The Satanic Verses","author":"Salman Rushdie","countries":["Egypt","Indonesia","Kenya","Kuwait","Liberia","Malaysia","Nepal","Pakistan","Papua New Guinea","Senegal","Singapore","Sri Lanka","Tanzania","Thailand"],"description":"A magical realist novel that sparked international controversy over its portrayal of Islamic themes and religious skepticism.","ban_year":"1988","categories":["Religious","Occult"]},{"title":"Animal Farm","author":"George Orwell","countries":["China","Czechoslovakia","Soviet Union","Ukraine","United Arab Emirates","Vietnam"],"description":"Political allegory using farm animals to critique totalitarianism and the corruption of revolutionary ideals.","ban_year":"1945","categories":["Political","Satire","Anti-Authority"]},{"title":"Lolita","author":"Vladimir Nabokov","countries":["Argentina","France","New Zealand","South Africa","United Kingdom"],"description":"A controversial novel narrated by a pedophile, exploring themes of obsession, manipulation, and morality.","ban_year":"1955","categories":["Sexual Content"]},{"title":"Lady Chatterley's Lover","author":"D. H. Lawrence","countries":["Australia","United Kingdom","United States"],"description":"Novel depicting romantic and sexual relationships, banned for its explicit sexual content and challenge to social class boundaries.","ban_year":"1928","categories":["Sexual Content"]},{"title":"Mein Kampf","author":"Adolf Hitler","countries":["Guatemala","Poland","Russia"],"description":"Autobiographical manifesto by Adolf Hitler, banned in many countries due to its hateful Nazi ideology and antisemitism.","ban_year":"1925","categories":["Political","Historical","Philosophy"]},{"title":"Goat Days","author":"Benyamin & Joseph Koyippally","countries":["Saudi Arabia","Ukraine","United Arab Emirates"],"description":"Autobiographical account of exploitation and human suffering, depicting the struggles of migrant workers.","ban_year":"2008","categories":["Historical"]},{"title":"Forever Amber","author":"Kathleen Winsor","countries":["Australia","United States"],"description":"Historical novel spanning the English Civil War and Restoration period, banned for sexual content and romantic intrigue.","ban_year":"1944","categories":["Political","Sexual Content","Violence","Historical"]},{"title":"Borstal Boy","author":"Brendan Behan","countries":["Australia","New Zealand"],"description":"Autobiographical account by an Irish writer of his experiences in reform school, containing sexual references and language.","ban_year":"1958","categories":["Sexual Content","Historical"]},{"title":"The Anarchist Cookbook","author":"William Powell","countries":["Australia","United Kingdom"],"description":"Manual covering DIY counterculture, activism, and instructions for various controversial and illegal activities.","ban_year":"1971","categories":["Anti-Authority"]},{"title":"The Peaceful Pill Handbook","author":"Philip Nitschke and Fiona Stewart","countries":["Australia","New Zealand"],"description":"Guide discussing end-of-life options and euthanasia, banned for its discussion of peaceful methods of suicide.","ban_year":"2007","categories":["Instructional"]},{"title":"The Open Veins of Latin America","author":"Eduardo Galeano","countries":["Chile","Uruguay"],"description":"Marxist analysis of economic imperialism and exploitation of Latin America by Western powers.","ban_year":"1971","categories":["Political"]},{"title":"The White Disease","author":"Karel Čapek","countries":["China","Czechoslovakia"],"description":"Allegorical play about a plague that mirrors political turmoil, banned for its anti-authoritarian themes.","ban_year":"1937","categories":["Political","Satire"]},{"title":"Berlin Garden of Erotic Delights","author":"Erwin von Busse under the pseudonym \"Granand\"","countries":["Germany","Weimar Republic (1918–1933)"],"description":"Erotic novel depicting explicit sexual scenes and decadent lifestyle in 1920s Berlin.","ban_year":"1920","categories":["Sexual Content"]},{"title":"All Quiet on the Western Front","author":"Erich Maria Remarque","countries":["Israel","Italy"],"description":"Anti-war novel depicting the horrors and disillusionment of World War I from a soldier's perspective.","ban_year":"1928","categories":["Violence"]},{"title":"A Farewell to Arms","author":"Ernest Hemingway","countries":["Israel","Italy"],"description":"Novel set during World War I exploring love and the futility of war.","ban_year":"1929","categories":["Violence"]},{"title":"Rights of Man","author":"Thomas Paine","countries":["Russia","United Kingdom"],"description":"Political treatise defending the French Revolution and individual rights against monarchical authority.","ban_year":"1791","categories":["Political","Philosophy"]},{"title":"Nineteen Eighty-Four","author":"George Orwell","countries":["Soviet Union","Vietnam"],"description":"Dystopian novel about totalitarianism, surveillance, and the manipulation of truth by an authoritarian government.","ban_year":"1949","categories":["Political"]},{"title":"Ulysses","author":"James Joyce","countries":["Spain","United Kingdom"],"description":"Modernist novel depicting a single day in Dublin using experimental narrative techniques and explicit sexual content.","ban_year":"1922","categories":["Sexual Content"]},{"title":"Fanny Hill or Memoirs of a Woman of Pleasure","author":"John Cleland","countries":["United Kingdom","United States"],"description":"Erotic novel from 1748 depicting a woman's sexual encounters, one of the first major obscenity trials.","ban_year":"1748","categories":["Sexual Content","Historical"]},{"title":"Përbindëshi (The Monster)","author":"Ismail Kadare","countries":["Albania"],"description":"","ban_year":"1965","categories":["Unknown"]},{"title":"The Decameron","author":"Giovanni Boccaccio","countries":["Australia"],"description":"Medieval collection of novellas depicting sexual encounters and irreverent stories, banned for moral concerns.","ban_year":"1353","categories":["Sexual Content"]},{"title":"The 120 Days of Sodom","author":"Marquis de Sade","countries":["Australia"],"description":"Extreme novel by the Marquis de Sade depicting graphic sexual violence and torture.","ban_year":"1789","categories":["Sexual Content","Violence"]},{"title":"Droll Stories","author":"Honoré de Balzac","countries":["Australia"],"description":"Collection of bawdy tales and humorous stories with sexual content and ironic social commentary.","ban_year":"1837","categories":["Sexual Content","Satire"]},{"title":"The Straits Impregnable","author":"Sydney Loch","countries":["Australia"],"description":"Political narrative examining geopolitical conflicts and British imperial interests in sensitive regions.","ban_year":"1916","categories":["Political"]},{"title":"Rowena Goes Too Far","author":"H. C. Asterley","countries":["Australia"],"description":"Satirical novel with explicit sexual content and irreverent social commentary.","ban_year":"1931","categories":["Sexual Content","Satire"]},{"title":"Brave New World","author":"Aldous Huxley","countries":["Australia"],"description":"Dystopian science fiction depicting a seemingly perfect but oppressive future society controlled through drugs and conditioning.","ban_year":"1932","categories":["Drugs"]},{"title":"The Cautious Amorist","author":"Norman Lindsay","countries":["Australia"],"description":"Novel exploring complex relationships and sexual situations with frank depictions of intimacy.","ban_year":"1932","categories":["Sexual Content"]},{"title":"Another Country","author":"James Baldwin","countries":["Australia"],"description":"Novel by James Baldwin exploring themes of race, sexuality, and artistic life in New York and Europe.","ban_year":"1962","categories":["Sexual Content"]},{"title":"Ecstasy and Me","author":"Hedy Lamarr","countries":["Australia"],"description":"Memoir by actress Hedy Lamarr containing explicit sexual content and frank discussions of relationships.","ban_year":"1966","categories":["Sexual Content","Historical"]},{"title":"The World Is Full of Married Men","author":"Jackie Collins","countries":["Australia"],"description":"Novel depicting extramarital affairs and sexual encounters with explicit content.","ban_year":"1968","categories":["Sexual Content"]},{"title":"How to make disposable silencers","author":"Desert and Eliezer Flores","countries":["Australia"],"description":"Instructional text providing information on weapon accessories and illegal modifications.","ban_year":"1984","categories":["Instructional"]},{"title":"American Psycho","author":"Bret Easton Ellis","countries":["Australia"],"description":"Satirical psychological thriller depicting extreme violence and the shallow materialism of 1980s New York.","ban_year":"1991","categories":["Violence","Satire"]},{"title":"A Sneaking Suspicion","author":"John Dickson","countries":["Australia"],"description":"Novel exploring complex moral and psychological themes with controversial content.","ban_year":"1995","categories":["Fiction"]},{"title":"You: An Introduction","author":"Michael Jensen","countries":["Australia"],"description":"Religious or philosophical text addressing contemporary themes and belief systems.","ban_year":"2008","categories":["Religious","Philosophy"]},{"title":"No Game No Life (Volumes 1, 2, 9)","author":"Yuu Kamiya","countries":["Australia"],"description":"Japanese light novel series containing fan service content and suggestive material.","ban_year":"2012","categories":["Fiction"]},{"title":"Uitgeverij Guggenheimer(\"Guggenheimer Publishers\")","author":"Herman Brusselmans","countries":["Belgium"],"description":"","ban_year":"1999","categories":["Unknown"]},{"title":"The Mountain Wreath","author":"Petar II Petrović-Njegoš","countries":["Bosnia and Herzegovina"],"description":"Historical epic poem depicting Serbian nationalism and conflict.","ban_year":"1847","categories":["Historical"]},{"title":"Happy New Year","author":"Rubem Fonseca","countries":["Brazil"],"description":"Crime fiction with explicit violence and challenging moral themes.","ban_year":"1975","categories":["Violence"]},{"title":"How to Read Donald Duck","author":"Ariel Dorfman and Armand Mattelart","countries":["Chile"],"description":"Marxist cultural critique analyzing Disney comics as tools of capitalist propaganda.","ban_year":"1971","categories":["Political","Satire"]},{"title":"The House of the Spirits","author":"Isabel Allende","countries":["Chile"],"description":"Multi-generational family saga featuring magical realism and political upheaval in Latin America.","ban_year":"1982","categories":["Political","Occult"]},{"title":"Clandestine in Chile","author":"Gabriel García Márquez","countries":["Chile"],"description":"Journalistic account of underground resistance during Pinochet's dictatorship.","ban_year":"1986","categories":["Political"]},{"title":"A Feast for the Seaweeds (Walimah li A'ashab al‑Bahr)","author":"Haidar Haidar","countries":["Egypt"],"description":"Arabic novel exploring existential and spiritual themes with critique of religious institutions.","ban_year":"1983","categories":["Religious","Satire","Philosophy"]},{"title":"One Day of Life","author":"Manlio Argueta","countries":["El Salvador"],"description":"Novel depicting the life of a peasant woman during El Salvador's civil war and political struggle.","ban_year":"1980","categories":["Political","Violence"]},{"title":"I Didn't Do It for You: How the World Betrayed a Small African Nation","author":"Michela Wrong","countries":["Eritrea"],"description":"Historical account of Eritrea's colonial history and geopolitical exploitation.","ban_year":"2005","categories":["Political","Historical"]},{"title":"My Father's Daughter","author":"Hannah Pool","countries":["Eritrea"],"description":"Memoir about cultural identity and the experience of being of mixed heritage in modern Britain.","ban_year":null,"categories":["Historical"]},{"title":"Scouting for the Reaper","author":"Jacob M. Appel","countries":["Eritrea"],"description":"Literary work containing dark themes and psychological exploration.","ban_year":"2014","categories":["Other"]},{"title":"Les Mœurs","author":"François-Vincent Toussaint","countries":["France"],"description":"18th-century philosophical essay challenging accepted social and moral conventions.","ban_year":null,"categories":["Philosophy"]},{"title":"Suicide mode d'emploi","author":"Claude Guillon","countries":["France"],"description":"Controversial guide discussing methods and philosophical perspectives on suicide.","ban_year":"1982","categories":["Philosophy"]},{"title":"The Jungle","author":"Upton Sinclair","countries":["East Germany (1949–1990)"],"description":"Muckraking novel exposing the horrors and corruption of the American meatpacking industry.","ban_year":"1906","categories":["Fiction"]},{"title":"Lysistrata (411 BC)","author":"Aristophanes","countries":["Greece"],"description":"Ancient Greek comedy depicting women withholding sexual relations to end war, containing bawdy humor.","ban_year":null,"categories":["Sexual Content","Violence"]},{"title":"El Señor Presidente","author":"Miguel Ángel Asturias","countries":["Guatemala"],"description":"Allegorical novel depicting the tyranny and paranoia of an unnamed Latin American dictator.","ban_year":"1946","categories":["Satire"]},{"title":"Rama Retold","author":"Aubrey Menen","countries":["India"],"description":"Modern reinterpretation of the Sanskrit epic Ramayana, seen as irreverent by some religious groups.","ban_year":"1954","categories":["Religious"]},{"title":"The Fugitive (Perburuan)","author":"Pramoedya Ananta Toer","countries":["Indonesia"],"description":"Indonesian novel depicting revolutionary resistance and political struggle.","ban_year":"1950","categories":["Political","Anti-Authority"]},{"title":"All Chinese literature","author":"Unknown","countries":["Indonesia"],"description":"Sweeping ban on Chinese literary works during political upheaval and foreign relations tensions.","ban_year":"1967","categories":["Political"]},{"title":"Interest","author":"Kevin Gaughen","countries":["Indonesia"],"description":"Contemporary fiction exploring social and personal themes.","ban_year":"2015","categories":["Fiction"]},{"title":"Little Black Sambo","author":"Helen Bannerman","countries":["Japan"],"description":"Children's book criticized for racist caricatures and stereotypical depictions of African peoples.","ban_year":"1899","categories":["Racial/Ethnic","Children/YA"]},{"title":"Sophie's Choice","author":"William Styron","countries":["Lebanon"],"description":"Novel exploring the Holocaust and moral complicity through a woman's traumatic past.","ban_year":"1979","categories":["Violence"]},{"title":"Schindler's Ark","author":"Thomas Keneally","countries":["Lebanon"],"description":"Historical novel depicting the Holocaust and one man's efforts to save Jewish lives.","ban_year":"1982","categories":["Religious","Violence","Historical"]},{"title":"The Da Vinci Code","author":"Dan Brown","countries":["Lebanon"],"description":"Thriller depicting conspiracy theories about Christianity and the Catholic Church.","ban_year":"2003","categories":["Religious"]},{"title":"Grover's Eight Nights of Light","author":"Jodie Shepherd","countries":["Lebanon"],"description":"Children's book addressing religious themes in a pluralistic context.","ban_year":"2017","categories":["Religious","Children/YA"]},{"title":"Onward Muslim Soldiers","author":"Robert B. Spencer","countries":["Malaysia"],"description":"Political and religious commentary critiquing Islamic doctrine and politics.","ban_year":"2003","categories":["Political","Religious","Violence"]},{"title":"Fifty Shades Trilogy","author":"E. L. James","countries":["Malaysia"],"description":"Erotic romance novels with explicit sexual content and BDSM themes.","ban_year":"2011","categories":["Sexual Content"]},{"title":"The Mask of Sanity","author":"Jacob M. Appel","countries":["Malaysia"],"description":"Psychological thriller with disturbing and violent content.","ban_year":"2017","categories":["Violence"]},{"title":"Rebirth: Reformasi, Resistance, and Hope in New Malaysia","author":"Kean Wong","countries":["Malaysia"],"description":"Political commentary on Malaysian governance and social reform movements.","ban_year":"2020","categories":["Political"]},{"title":"Gay is OK! A Christian Perspective (2013‍–‍2022)","author":"Boon Lin Ngeo","countries":["Malaysia"],"description":"Religious text challenging traditional Christian views on LGBTQ+ issues.","ban_year":"2013","categories":["Religious","LGBTQ+"]},{"title":"Peichi (Tamil: பேய்ச்சி)","author":"Ma. Naveen","countries":["Malaysia"],"description":"Malayalam work containing themes sensitive to religious or cultural groups.","ban_year":"2020","categories":["Religious"]},{"title":"A Million Kisses in Your Lifetime","author":"Monica Murphy","countries":["Malaysia"],"description":"Contemporary romance novel with sexual and mature content.","ban_year":"2022","categories":["Sexual Content"]},{"title":"Lose You to Find Me","author":"Erik J. Brown","countries":["Malaysia"],"description":"Young adult novel exploring LGBTQ+ themes and relationships.","ban_year":"2023","categories":["LGBTQ+","Children/YA"]},{"title":"Punai","author":"Asyraf Bakti","countries":["Malaysia"],"description":"Work exploring controversial themes in Malaysian literature and culture.","ban_year":"2022","categories":["Other"]},{"title":"Scattered Showers","author":"Rainbow Rowell","countries":["Malaysia"],"description":"YA novel featuring LGBTQ+ characters and relationships.","ban_year":null,"categories":["LGBTQ+","Children/YA"]},{"title":"When Everything Feels Like The Movie","author":"Raziel Reid","countries":["Malaysia"],"description":"Young adult novel exploring identity and sexuality.","ban_year":"2014","categories":["Sexual Content","Children/YA"]},{"title":"What If It's Us","author":"Becky Albertalli and Adam Silverra","countries":["Malaysia"],"description":"LGBTQ+ young adult romance exploring coming-of-age themes.","ban_year":"2018","categories":["LGBTQ+","Children/YA"]},{"title":"My Shadow is Purple","author":"Scott Stuart","countries":["Malaysia"],"description":"Children's book addressing social and psychological themes.","ban_year":"2022","categories":["Children/YA"]},{"title":"Koleksi Puisi Masturbasi","author":"Benz Ali","countries":["Malaysia"],"description":"Poetry collection with explicit sexual and provocative content.","ban_year":"2015","categories":["Sexual Content"]},{"title":"All That's Left in the World","author":"Erik J. Brown","countries":["Malaysia"],"description":"Novel exploring complex relationships and mature themes.","ban_year":"2022","categories":["Fiction"]},{"title":"Notre ami le roi","author":"Gilles Perrault","countries":["Morocco"],"description":"Political and biographical work critiquing Middle Eastern governance.","ban_year":"1993","categories":["Political","Historical"]},{"title":"Le roi prédateur","author":"Catherine Graciet and Éric Laurent","countries":["Morocco"],"description":"Investigative journalism exposing corruption in royal institutions.","ban_year":"2012","categories":["Other"]},{"title":"The Rape of Sita","author":"Lindsay Collen","countries":["Mauritius"],"description":"Novel addressing sexual violence and postcolonial themes in a Hindu context.","ban_year":"1993","categories":["Political","Religious","Sexual Content","Violence"]},{"title":"A Modern Approach to Social Studies","author":"Unknown","countries":["Nepal"],"description":"Educational textbook containing sensitive geopolitical content.","ban_year":"2010","categories":["Political"]},{"title":"Self Study Material on Nepal's Territory and Border","author":"Ministry of Education, Science and Technology","countries":["Nepal"],"description":"Educational material addressing territorial disputes and political boundaries.","ban_year":"2020","categories":["Political"]},{"title":"The Cover-up General","author":"Edwin Giltay","countries":["Netherlands"],"description":"Political commentary and investigative journalism on government corruption.","ban_year":"2014","categories":["Political"]},{"title":"Into the River","author":"Ted Dawe","countries":["New Zealand"],"description":"Young adult novel containing mature themes and explicit language.","ban_year":"2012","categories":["Children/YA"]},{"title":"My Watch","author":"Olusegun Obasanjo","countries":["Nigeria"],"description":"Political memoir with sensitive content about African leadership.","ban_year":"2014","categories":["Political","Historical"]},{"title":"Fra Kristiania-Bohêmen","author":"Hans Jæger","countries":["Norway"],"description":"Autobiographical work with explicit sexual and social content.","ban_year":"1885","categories":["Sexual Content","Historical"]},{"title":"Albertine","author":"Christian Krohg","countries":["Norway"],"description":"Artistic novel depicting street life and sexuality in 1880s Norway.","ban_year":"1886","categories":["Sexual Content"]},{"title":"Snorri the Seal","author":"Frithjof Sælen","countries":["Norway"],"description":"Children's/young adult work with themes sensitive to certain audiences.","ban_year":"1941","categories":["Children/YA"]},{"title":"The Song of the Red Ruby","author":"Agnar Mykle","countries":["Norway"],"description":"Novel with sexual and transgressive content challenging social norms.","ban_year":"1956","categories":["Sexual Content"]},{"title":"Without a Stitch","author":"Jens Bjørneboe","countries":["Norway"],"description":"Novel with explicit sexual content and challenging narrative structure.","ban_year":"1966","categories":["Sexual Content"]},{"title":"Satyarth Prakash","author":"Dayananda Saraswati","countries":["Pakistan"],"description":"Hindu philosophical text critiquing other religions and challenging Islamic doctrine.","ban_year":"1875","categories":["Religious","Philosophy"]},{"title":"Rangila Rasul","author":"Pt. Chamupati","countries":["Pakistan"],"description":"Satirical poem critiquing Prophet Muhammad, sparking religious controversy.","ban_year":"1927","categories":["Religious","Satire"]},{"title":"Jinnah of Pakistan","author":"Stanley Wolpert","countries":["Pakistan"],"description":"Biographical work with controversial interpretations of Pakistan's founding.","ban_year":"1982","categories":["Historical"]},{"title":"The Truth About Muhammad","author":"Robert Spencer","countries":["Pakistan"],"description":"Controversial analysis of Islamic history and theology.","ban_year":"2006","categories":["Religious","Historical"]},{"title":"On the Origins and Perpetual Use of the Legislative Powers of the Apostolic Kings of Hungary in Matters Ecclesiastical","author":"Adam F. Kollár","countries":["Papal States"],"description":"Historical ecclesiastical treatise challenging papal authority.","ban_year":"1764","categories":["Historical","Philosophy"]},{"title":"Noli Me Tángere","author":"Jose Rizal","countries":["Philippines"],"description":"Filipino novel criticizing Spanish colonial rule and the Catholic Church.","ban_year":"1887","categories":["Political","Religious"]},{"title":"The Conjugal Dictatorship of Ferdinand and Imelda Marcos","author":"Primitivo Mijares","countries":["Philippines"],"description":"Political chronicle documenting corruption during Marcos regime.","ban_year":"1976","categories":["Political","Historical"]},{"title":"The Untold Story of Imelda Marcos","author":"Carmen Pedrosa","countries":["Philippines"],"description":"Biographical work detailing the life and crimes of Imelda Marcos.","ban_year":null,"categories":["Historical"]},{"title":"Tawid diwa sa pananagisag ni Bienvenido Lumbera: Ang Bayan, ang Nanunulat at ang Magasing Sagisag sa Imahinatibong Yugto ng Batas Militar 1975–1979","author":"Dexter Cayanes","countries":["Philippines"],"description":"Filipino literary work critiquing martial law period.","ban_year":null,"categories":["Other"]},{"title":"Teatro Political Dos","author":"Malou Jacob","countries":["Philippines"],"description":"Filipino theater work with political and social commentary.","ban_year":null,"categories":["Political","Satire"]},{"title":"Kalatas: Mga Kuwentong Bayan at Kuwentong Buhay","author":"Rommel Rodriguez","countries":["Philippines"],"description":"Collection of folk tales and stories with cultural significance.","ban_year":null,"categories":["Fiction"]},{"title":"May Hadlang ang Umaga","author":"Don Pagusara","countries":["Philippines"],"description":"Filipino work exploring social and political themes.","ban_year":null,"categories":["Political"]},{"title":"Labas: Mga Palabas ng Sentro","author":"Reuel Aguilla","countries":["Philippines"],"description":"Philippine theater production with sociopolitical content.","ban_year":null,"categories":["Political"]},{"title":"Mirror of the Polish Crown","author":"Sebastian Miczyński","countries":["Poland"],"description":"Historical-religious text challenging religious authority.","ban_year":"1618","categories":["Religious","Historical"]},{"title":"História do Mundo para as Crianças [pt]","author":"Monteiro Lobato","countries":["Portugal"],"description":"Portuguese children's history book containing sensitive cultural content.","ban_year":"1933","categories":["Historical","Children/YA"]},{"title":"New Portuguese Letters (Novas Cartas Portuguesas)","author":"Maria Isabel Barreno, Maria Teresa Horta and Maria Velho da Costa","countries":["Portugal"],"description":"Experimental feminist novel with explicit sexual content.","ban_year":"1972","categories":["Sexual Content","Feminist"]},{"title":"The Boys","author":"Garth Ennis","countries":["Qatar"],"description":"Comic book series depicting graphic violence and satirical superhero deconstruction.","ban_year":"2012","categories":["Violence","Satire"]},{"title":"The Man Who Wouldn't Stand Up","author":"Jacob M. Appel","countries":["Qatar"],"description":"Literary work containing controversial themes.","ban_year":null,"categories":["Other"]},{"title":"Love Comes Later","author":"Mohanalakshmi Rajakumar","countries":["Qatar"],"description":"Contemporary fiction exploring relationships and social themes.","ban_year":"2014","categories":["Fiction"]},{"title":"Thalia","author":"Arius (AD 250 or 256 ‍–‍ 336)","countries":["Roman Empire"],"description":"Ancient Christian theological text deemed heretical by religious authorities.","ban_year":null,"categories":["Religious"]},{"title":"Quran","author":"Unknown","countries":["Russia"],"description":"Islamic holy text periodically banned in various contexts for political or religious reasons.","ban_year":null,"categories":["Political","Religious"]},{"title":"The Communist Manifesto","author":"Karl Marx and Friedrich Engels","countries":["Russia"],"description":"Political pamphlet outlining communist ideology, class struggle, and working-class revolution.","ban_year":"1848","categories":["Political","Philosophy"]},{"title":"Looking Backward","author":"Edward Bellamy","countries":["Russia"],"description":"Utopian novel depicting a socialist future society.","ban_year":"1888","categories":["Violence"]},{"title":"The Protocols of the Elders of Zion","author":"Unknown","countries":["Russia"],"description":"Antisemitic forgery fabricating Jewish conspiracy theories.","ban_year":"1903","categories":["Religious","Racial/Ethnic"]},{"title":"Apocalypse Culture","author":"Adam Parfrey","countries":["Russia"],"description":"Provocative essays exploring underground culture and controversial ideas.","ban_year":"1987","categories":["Philosophy"]},{"title":"Siege","author":"James Mason","countries":["Russia"],"description":"Political treatise advocating isolationist extremism and revolutionary violence.","ban_year":"1992","categories":["Political","Violence","Philosophy","Anti-Authority"]},{"title":"Works","author":"Friedrich Nietzsche","countries":["Soviet Union"],"description":"Collected literary works banned for political or social commentary.","ban_year":"1872","categories":["Political","Satire"]},{"title":"Doctor Zhivago","author":"Boris Pasternak","countries":["Soviet Union"],"description":"Historical novel set during the Russian Revolution, depicting personal and political upheaval of the era.","ban_year":"1955","categories":["Political","Historical"]},{"title":"One Day in the Life of Ivan Denisovich","author":"Alexander Solzhenitsyn","countries":["Soviet Union"],"description":"Novella depicting life in Soviet labor camps under Stalin.","ban_year":"1962","categories":["Political"]},{"title":"The First Circle","author":"Aleksandr Solzhenitsyn","countries":["Soviet Union"],"description":"Novel exploring life in Soviet research facilities and political repression.","ban_year":"1968","categories":["Political"]},{"title":"The Gulag Archipelago","author":"Aleksandr Solzhenitsyn","countries":["Soviet Union"],"description":"Historical account documenting the Soviet labor camp system and political repression under Stalin.","ban_year":"1973","categories":["Political","Historical"]},{"title":"Queen of Sheba and Biblical Scholarship","author":"Bernard Leeman","countries":["Saudi Arabia"],"description":"Religious scholarship challenging traditional biblical interpretations.","ban_year":null,"categories":["Religious"]},{"title":"Fazail-e-Amaal","author":"Zakariyya Kandhlawi","countries":["Saudi Arabia"],"description":"Islamic religious text promoting specific theological interpretations.","ban_year":null,"categories":["Religious"]},{"title":"Value, Price and Profit","author":"Karl Marx","countries":["Singapore"],"description":"Marxist economics treatise analyzing capitalist systems.","ban_year":"1865","categories":["Political","Philosophy"]},{"title":"Origin of Family, Private Property and State","author":"Friedrich Engels","countries":["Singapore"],"description":"Marxist historical-philosophical work on social evolution.","ban_year":"1884","categories":["Political","Historical","Philosophy"]},{"title":"One Step Forward, Two Steps Back","author":"Vladimir Lenin","countries":["Singapore"],"description":"Lenin's political polemic defending revolutionary tactics.","ban_year":"1904","categories":["Political","Violence","Anti-Authority"]},{"title":"Theories of Surplus Value","author":"Karl Marx","countries":["Singapore"],"description":"Marxist economic analysis of capitalist exploitation.","ban_year":"1905","categories":["Political"]},{"title":"Two Tactics of Social Democracy in the Democratic Revolution","author":"Vladimir Lenin","countries":["Singapore"],"description":"Lenin's strategic analysis for revolutionary action.","ban_year":"1905","categories":["Political","Anti-Authority"]},{"title":"Anarchism or Socialism?","author":"Joseph Stalin","countries":["Singapore"],"description":"Stalin's political work defending socialism against anarchist critiques.","ban_year":"1907","categories":["Political","Satire","Anti-Authority"]},{"title":"Fundamental Problems of Marxism","author":"Georgi Plekhanov","countries":["Singapore"],"description":"Marxist philosophical treatise on historical materialism.","ban_year":"1908","categories":["Political","Historical","Philosophy"]},{"title":"Heroines of the Modern Progress","author":"Elmer C. Adams","countries":["Singapore"],"description":"Early feminist work advocating for women's rights and equality.","ban_year":"1913","categories":["Drugs","Feminist"]},{"title":"The Right of Nations to Self-Determination","author":"Vladimir Lenin","countries":["Singapore"],"description":"Lenin's treatise on national liberation and colonial independence.","ban_year":"1914","categories":["Political","Philosophy"]},{"title":"Friedrich Engels: A Biography","author":"Gustav Mayer","countries":["Singapore"],"description":"Biographical work chronicling the life of Marx's collaborator.","ban_year":"1920","categories":["Historical"]},{"title":"\"Left-Wing\" Communism: An Infantile Disorder","author":"Vladimir Lenin","countries":["Singapore"],"description":"Lenin's critique of radical communist factions.","ban_year":null,"categories":["Political","Satire"]},{"title":"Problems of Leninism","author":"Joseph Stalin","countries":["Singapore"],"description":"Stalin's compilation of essays on Leninist theory and practice.","ban_year":"1926","categories":["Philosophy"]},{"title":"Time, Forward!","author":"Valentin Kataev","countries":["Singapore"],"description":"Soviet novel depicting industrial progress during early Five-Year Plans.","ban_year":"1932","categories":["Political","Violence"]},{"title":"How the Steel Was Tempered","author":"Nikolai Ostrovsky","countries":["Singapore"],"description":"Soviet novel idealizing revolutionary sacrifice and Communist values.","ban_year":"1936","categories":["Political","Anti-Authority"]},{"title":"Marxism and the National and Colonial Question","author":"Joseph Stalin","countries":["Singapore"],"description":"Stalin's analysis of imperialism and colonial liberation.","ban_year":"1937","categories":["Political"]},{"title":"Combat Liberalism","author":"Mao Zedong","countries":["Singapore"],"description":"Mao's political essay criticizing liberal attitudes within the Communist movement.","ban_year":null,"categories":["Political","Violence","Philosophy"]},{"title":"The A to Z of the Soviet Union","author":"Alex Page","countries":["Singapore"],"description":"Reference work providing historical and political context on Soviet institutions.","ban_year":"1946","categories":["Political","Historical"]},{"title":"Aspects of China's Anti-Japanese Struggle","author":"Mao Zedong","countries":["Singapore"],"description":"Mao's military and political writings on resistance.","ban_year":"1948","categories":["Political"]},{"title":"The Case for Communism","author":"William Gallacher","countries":["Singapore"],"description":"Political advocacy for communist ideology and revolution.","ban_year":"1949","categories":["Political"]},{"title":"Twilight of World Capitalism","author":"William Z. Foster","countries":["Singapore"],"description":"Marxist economic analysis predicting capitalist collapse.","ban_year":null,"categories":["Political"]},{"title":"Concerning Marxism in Linguistics","author":"Joseph Stalin","countries":["Singapore"],"description":"Stalin's intervention in Soviet linguistic theory.","ban_year":"1950","categories":["Political"]},{"title":"The Social and State Structure of the USSR","author":"Alexander Karpinsky","countries":["Singapore"],"description":"Analysis of Soviet political and social organization.","ban_year":"1952","categories":["Political"]},{"title":"What Islam Is All About","author":"Yahiya Emerick","countries":["Singapore"],"description":"Islamic educational text on faith and practice.","ban_year":"1997","categories":["Religious"]},{"title":"The Wisdom of Jihad","author":"Abuhuraira Abdurrahman","countries":["Singapore"],"description":"Islamic theological work discussing the concept of jihad.","ban_year":"2005","categories":["Religious"]},{"title":"Things that Nullify One's Islaam","author":"Shaykh al‑Islaam Muhammad ibn 'Abdil‑Wahhaab","countries":["Singapore"],"description":"Salafist religious text defining Islamic orthodoxy.","ban_year":"2013","categories":["Religious"]},{"title":"Red Lines: Political Cartoons and the Struggle Against Censorship","author":"Cherian George and Sonny Liew","countries":["Singapore"],"description":"Collection of political cartoons critiquing authoritarianism and censorship.","ban_year":"2021","categories":["Political"]},{"title":"Frankenstein","author":"Mary Shelley","countries":["South Africa"],"description":"Gothic novel exploring themes of creation, responsibility, and the dangers of unchecked scientific ambition.","ban_year":"1818","categories":["Fiction"]},{"title":"\"The Lottery\"","author":"Shirley Jackson","countries":["South Africa"],"description":"Short story depicting ritualistic violence in seemingly normal society.","ban_year":"1948","categories":["Violence"]},{"title":"A World of Strangers","author":"Nadine Gordimer","countries":["South Africa"],"description":"Novel exploring racial and social relationships in apartheid South Africa.","ban_year":"1958","categories":["Racial/Ethnic"]},{"title":"Why We Can't Wait","author":"Martin Luther King Jr.","countries":["South Africa"],"description":"Civil rights memoir and analysis by Martin Luther King Jr.","ban_year":"1964","categories":["Historical"]},{"title":"The First Book of Africa","author":"Langston Hughes","countries":["South Africa"],"description":"Pro-independence African literature celebrating African history and culture.","ban_year":null,"categories":["Historical"]},{"title":"The Autobiography of Malcolm X","author":"Malcolm X with Alex Haley","countries":["South Africa"],"description":"Memoir of the African American religious and political leader.","ban_year":"1965","categories":["Political","Religious","Historical"]},{"title":"Black Power: The Politics of Liberation","author":"Stokely Carmichael and Charles V. Hamilton","countries":["South Africa"],"description":"Political manifesto advocating for African American self-determination.","ban_year":"1967","categories":["Political","Philosophy"]},{"title":"Soul on Ice","author":"Eldridge Cleaver","countries":["South Africa"],"description":"Prison memoir and political analysis by Black Panther member.","ban_year":"1968","categories":["Political","Historical"]},{"title":"The Satanic Bible","author":"Anton LaVey","countries":["South Africa"],"description":"Religious text outlining Satanist philosophy and practices.","ban_year":"1969","categories":["Religious","Philosophy","Occult"]},{"title":"The Struggle Is My Life","author":"Nelson Mandela","countries":["South Africa"],"description":"Memoir and essays by Nelson Mandela on anti-apartheid struggle.","ban_year":"1978","categories":["Racial/Ethnic","Historical","Philosophy"]},{"title":"Burger's Daughter","author":"Nadine Gordimer","countries":["South Africa"],"description":"Novel exploring identity and political engagement during apartheid.","ban_year":"1979","categories":["Political","Racial/Ethnic"]},{"title":"July's People","author":"Nadine Gordimer","countries":["South Africa"],"description":"Post-apartheid dystopian novel exploring race and power reversal.","ban_year":"1981","categories":["Racial/Ethnic"]},{"title":"Year 501: The Conquest Continues","author":"Noam Chomsky","countries":["South Korea"],"description":"Historical analysis of Western imperialism and colonialism.","ban_year":"2000","categories":["Political","Historical"]},{"title":"What Uncle Sam Really Wants","author":"Noam Chomsky","countries":["South Korea"],"description":"Political critique of American foreign policy and imperialism.","ban_year":"2007","categories":["Political","Satire"]},{"title":"Guerillas of the Kingdom of Samsung","author":"Pressian","countries":["South Korea"],"description":"Political satire on corporate power and labor issues.","ban_year":"2008","categories":["Political","Satire"]},{"title":"Auf Der Universität","author":"Theodor Storm","countries":["South Korea"],"description":"German literary work exploring intellectual and social themes.","ban_year":"1999","categories":["Philosophy"]},{"title":"The Global Trap","author":"Hans-Peter Martin and Harald Schumann","countries":["South Korea"],"description":"Economic analysis of globalization and its consequences.","ban_year":"2003","categories":["Other"]},{"title":"Bad Samaritans: The Myth of Free Trade and the Secret History of Capitalism","author":"Ha-Joon Chang","countries":["South Korea"],"description":"Economic history challenging neoliberal theory.","ban_year":"2007","categories":["Political","Historical"]},{"title":"One Spoon on This Earth","author":"Hyun Ki-young","countries":["South Korea"],"description":"Korean novel with psychological and political depth.","ban_year":"1999","categories":["Political"]},{"title":"Slots","author":"Shin Gyeong-jin","countries":["South Korea"],"description":"Contemporary Korean fiction exploring modern social issues.","ban_year":"2007","categories":["Fiction"]},{"title":"Respect: Everything a Guy Needs to Know About Sex","author":"Inti Chavez Perez","countries":["South Korea"],"description":"Sex education book with frank discussions of sexuality.","ban_year":"2020","categories":["Sexual Content"]},{"title":"Works","author":"Johannes Kepler","countries":["Spain"],"description":"Collected literary works banned for political or social commentary.","ban_year":"1596","categories":["Political","Satire"]},{"title":"Works","author":"Voltaire","countries":["Spain"],"description":"Collected literary works banned for political or social commentary.","ban_year":"1727","categories":["Political","Satire"]},{"title":"Works","author":"Vicente Blasco Ibáñez","countries":["Spain"],"description":"Collected literary works banned for political or social commentary.","ban_year":"1892","categories":["Political","Satire"]},{"title":"A Short History of the World","author":"H. G. Wells","countries":["Spain"],"description":"Historical overview containing material challenges to religious authority.","ban_year":"1922","categories":["Religious","Historical"]},{"title":"The Story of Ferdinand","author":"Munro Leaf","countries":["Spain"],"description":"Children's book promoting pacifism and non-violence.","ban_year":"1936","categories":["Violence","Children/YA"]},{"title":"Homage to Catalonia","author":"George Orwell","countries":["Spain"],"description":"Autobiographical account of fighting in the Spanish Civil War and witnessing political betrayal and repression.","ban_year":"1938","categories":["Political","Violence","Historical"]},{"title":"For Whom the Bell Tolls","author":"Ernest Hemingway","countries":["Spain"],"description":"Novel set during the Spanish Civil War depicting resistance fighters and the moral complexities of revolution.","ban_year":"1940","categories":["Political","Violence"]},{"title":"Works","author":"Federico García Lorca","countries":["Spain"],"description":"Collected literary works banned for political or social commentary.","ban_year":"1939","categories":["Political","Satire"]},{"title":"You Can't Be Too Careful","author":"H. G. Wells","countries":["Spain"],"description":"Science fiction work by H.G. Wells with controversial themes.","ban_year":"1941","categories":["Fiction"]},{"title":"The Spanish Labyrinth","author":"Gerald Brenan","countries":["Spain"],"description":"Historical analysis of Spanish politics and the Spanish Civil War.","ban_year":"1943","categories":["Political","Violence","Historical"]},{"title":"The Second Sex","author":"Simone de Beauvoir","countries":["Spain"],"description":"Philosophical treatise on women's oppression, freedom, and the construction of gender roles in society.","ban_year":"1949","categories":["Philosophy","Feminist"]},{"title":"The Hive","author":"Camilo José Cela","countries":["Spain"],"description":"Experimental novel depicting post-Civil War Spain with fragmented narrative.","ban_year":"1950","categories":["Political","Violence"]},{"title":"The Spanish Civil War","author":"Hugh Thomas","countries":["Spain"],"description":"Historical account of the Spanish Civil War and its international dimensions.","ban_year":"1961","categories":["Political","Violence","Historical"]},{"title":"The Death of Lorca","author":"Ian Gibson","countries":["Spain"],"description":"Biography of poet and political victim Federico García Lorca.","ban_year":"1971","categories":["Political"]},{"title":"Various works","author":"Shen Congwen","countries":["Taiwan"],"description":"Multiple works by an author banned for political or moral reasons.","ban_year":"1902","categories":["Political"]},{"title":"The Devil's Discus","author":"Rayne Kruger","countries":["Thailand"],"description":"Novel addressing controversial themes in Thai society.","ban_year":"1964","categories":["Occult"]},{"title":"The King Never Smiles","author":"Paul M. Handley","countries":["Thailand"],"description":"Unauthorized biography of Thai monarchy containing sensitive material.","ban_year":"2006","categories":["Other"]},{"title":"Rama X: The Thai Monarchy under King Vajiralongkorn","author":"Pavin Chachavalpongpun","countries":["Thailand"],"description":"Political analysis of contemporary Thai governance.","ban_year":"2024","categories":["Political"]},{"title":"The Greedy Barbarian","author":"Kakwenza Rukirabashaija","countries":["Uganda"],"description":"Ugandan novel with political satire and social criticism.","ban_year":"2020","categories":["Political","Satire"]},{"title":"From Third World to First","author":"Lee Kuan Yew","countries":["Uganda"],"description":"Political memoir of Lee Kuan Yew on Singapore's development.","ban_year":"2000","categories":["Political","Historical"]},{"title":"Betrayed By My Leader","author":"John Kazoora","countries":["Uganda"],"description":"Political commentary on African leadership and governance.","ban_year":"2012","categories":["Political"]},{"title":"Areopagitica","author":"John Milton","countries":["United Kingdom"],"description":"17th-century essay by John Milton arguing against censorship.","ban_year":"1644","categories":["Philosophy"]},{"title":"Despised and Rejected","author":"R. Allatini (under the pseudonym A. T. Fitzroy)","countries":["United Kingdom"],"description":"Early 20th-century novel with homoerotic themes and wartime conscription critique.","ban_year":"1918","categories":["Sexual Content","Violence","LGBTQ+","Satire"]},{"title":"The Well of Loneliness","author":"Radclyffe Hall","countries":["United Kingdom"],"description":"Pioneering lesbian novel depicting relationships between women.","ban_year":"1928","categories":["Sexual Content","LGBTQ+"]},{"title":"Boy","author":"James Hanley","countries":["United Kingdom"],"description":"Novel with explicit language and challenges to moral conventions.","ban_year":"1931","categories":["Fiction"]},{"title":"Last Exit to Brooklyn","author":"Hubert Selby Jr.","countries":["United Kingdom"],"description":"Gritty urban novel depicting street life and sexual content.","ban_year":"1966","categories":["Sexual Content"]},{"title":"Spycatcher","author":"Peter Wright","countries":["United Kingdom"],"description":"Memoir by former British intelligence officer revealing government secrets.","ban_year":"1985","categories":["Political","Historical"]},{"title":"Lord Horror","author":"David Britton","countries":["United Kingdom"],"description":"Experimental horror novel with extreme and transgressive content.","ban_year":"1990","categories":["Fiction"]},{"title":"Kill or Get Killed","author":"Rex Applegate","countries":["United Kingdom"],"description":"Military tactics and combat manual.","ban_year":"1976","categories":["Violence"]},{"title":"Put 'Em Down. Take 'Em Out. Knife Fighting Techniques From Folsom Prison","author":"Don Pentecost","countries":["United Kingdom"],"description":"Instructional guide on combat techniques.","ban_year":"1988","categories":["Violence"]},{"title":"The Meritorious Price of Our Redemption","author":"William Pynchon","countries":["United States"],"description":"Colonial American religious text challenging Orthodox theology.","ban_year":"1650","categories":["Political","Religious"]},{"title":"Candide","author":"Voltaire","countries":["United States"],"description":"Satirical philosophical novella critiquing optimism, war, and the nature of human suffering.","ban_year":"1759","categories":["Violence","Satire","Philosophy"]},{"title":"Uncle Tom's Cabin","author":"Harriet Beecher Stowe","countries":["United States"],"description":"Anti-slavery novel depicting the brutal realities of slavery in the American South.","ban_year":"1852","categories":["Violence","Racial/Ethnic"]},{"title":"Elmer Gantry","author":"Sinclair Lewis","countries":["United States"],"description":"Novel satirizing evangelical religion and hypocrisy in 1920s America.","ban_year":"1927","categories":["Satire"]},{"title":"Tropic of Cancer","author":"Henry Miller","countries":["United States"],"description":"Autobiographical novel depicting bohemian life in Paris with explicit sexual content and unconventional narrative.","ban_year":"1934","categories":["Sexual Content","Historical"]},{"title":"The Grapes of Wrath","author":"John Steinbeck","countries":["United States"],"description":"Social novel about migrant workers and their exploitation during the Great Depression.","ban_year":"1939","categories":["Sexual Content"]},{"title":"Memoirs of Hecate County","author":"Edmund Wilson","countries":["United States"],"description":"Novel with sexual content and experimental narrative structure.","ban_year":"1946","categories":["Sexual Content","Historical"]},{"title":"Howl","author":"Allen Ginsberg","countries":["United States"],"description":"Modernist poem celebrating counterculture, nonconformity, and criticizing conformist American society.","ban_year":"1955","categories":["Other"]},{"title":"Naked Lunch","author":"William S. Burroughs","countries":["United States"],"description":"Experimental postmodern novel with surreal imagery, sexual content, and critiques of drug use and control.","ban_year":"1959","categories":["Sexual Content","Drugs","Satire"]},{"title":"United States – Vietnam Relations, 1945–1967: A Study Prepared by the Department of Defense","author":"Robert McNamara and the United States Department of Defense","countries":["United States"],"description":"The Pentagon Papers, classified government study revealing American deception about the Vietnam War.","ban_year":"1971","categories":["Political","Violence"]},{"title":"The Federal Mafia","author":"Irwin Schiff","countries":["United States"],"description":"Anti-government treatise challenging federal tax authority.","ban_year":"1992","categories":["Political","Philosophy","Anti-Authority"]},{"title":"Operation Dark Heart (2010) – oop","author":"Army Reserve Lt. Col. Anthony Shaffer","countries":["United States"],"description":"Memoir by military officer containing classified information and controversial analysis.","ban_year":"2010","categories":["Historical"]},{"title":"Works","author":"Hamid Ismailov","countries":["Uzbekistan"],"description":"Collected literary works banned for political or social commentary.","ban_year":null,"categories":["Political","Satire"]},{"title":"La İlahe İllallah Ne Demek Biliyor musun?","author":"Faruk Furkan","countries":["Uzbekistan"],"description":"Islamic religious text with controversial theological content.","ban_year":null,"categories":["Religious"]},{"title":"Demokratiya - bu dindir!","author":"Abu Muhammad Maqdisiy","countries":["Uzbekistan"],"description":"Islamic political tract advocating specific governance models.","ban_year":null,"categories":["Political","Religious"]},{"title":"Mourning Headband for Hue: An Account of the Battle for Hue, Vietnam 1968 (Một lần nhân vật Mậu Thân trong \"Giải Khăn Sô Cho Huế\")","author":"Nhã Ca","countries":["Vietnam"],"description":"","ban_year":"1969","categories":["Unknown"]},{"title":"Paradise of the Blind","author":"Dương Thu Hương","countries":["Vietnam"],"description":"Vietnamese novel critiquing the consequences of communist revolution.","ban_year":"1988","categories":["Political"]},{"title":"Politics for Everyone (Chính Trị Bình Dân)","author":"Phạm Đoan Trang","countries":["Vietnam"],"description":"Vietnamese political analysis and advocacy.","ban_year":"2017","categories":["Political"]},{"title":"The Road To Serfdom","author":"Friedrich Hayek","countries":["Vietnam"],"description":"Economic treatise warning against central planning and government control.","ban_year":"1944","categories":["Political","Violence","Philosophy"]},{"title":"A Tale for 2000 (Chuyện Kể Năm 2000)","author":"Bùi Ngọc Tuấn","countries":["Vietnam"],"description":"Vietnamese science fiction or speculative work.","ban_year":"2000","categories":["Fiction"]},{"title":"The Winning Side (Bên Thắng Cuộc)","author":"Huy Đức","countries":["Vietnam"],"description":"Vietnamese historical or political narrative.","ban_year":"2012","categories":["Political","Historical"]},{"title":"A Dusty Wind (Một Cơn Gió Bụi)","author":"Trần Trọng Kim","countries":["Vietnam"],"description":"Vietnamese literary work addressing historical events.","ban_year":"2017","categories":["Historical"]},{"title":"A Handbook of How to Support Prisoners of Conscience (Cẩm nang nuôi tù)","author":"Phạm Đoan Trang","countries":["Vietnam"],"description":"Activist guide supporting political prisoners.","ban_year":"2019","categories":["Political"]},{"title":"Politics of the police state","author":"Phạm Đoan Trang","countries":["Vietnam"],"description":"Vietnamese analysis of authoritarian governance.","ban_year":"2019","categories":["Political"]},{"title":"Dong Tam report (Báo Cáo Đồng Tâm)","author":"Phạm Đoan Trang","countries":["Vietnam"],"description":"Documentary report on Vietnamese political conflict.","ban_year":"2020","categories":["Political"]},{"title":"Safeguard defenders: Crime must be punished. How to use Magnitsky law to punish human rights violators. (Tội ác phải bị trừng phạt. Hướng dẫn dùng luật Magnitsky để trừng phạt kẻ vi phạm nhân quyền.)","author":"Phạm Đoan Trang","countries":["Vietnam"],"description":"","ban_year":"2020","categories":["Unknown"]},{"title":"The Nickel‑Plated-Feet Gang During the Occupation(Les Pieds nickelés dans le maquis)","author":"Successors of Louis Forton","countries":["Yugoslavia"],"description":"","ban_year":"1879","categories":["Unknown"]},{"title":"About a Silence in Literature","author":"Živorad Stojković","countries":["Yugoslavia"],"description":"Yugoslav literary criticism with political implications.","ban_year":null,"categories":["Political"]},{"title":"The New Class: An Analysis of the Communist System","author":"Milovan Đilas","countries":["Yugoslavia"],"description":"Political analysis critiquing communist bureaucratic class.","ban_year":"1957","categories":["Political"]},{"title":"Curved River","author":"Živojin Pavlović","countries":["Yugoslavia"],"description":"Yugoslav literary work with social commentary.","ban_year":"1963","categories":["Satire"]},{"title":"Dictionary of Modern Serbo-Croatian Language","author":"Miloš Moskovljević","countries":["Yugoslavia"],"description":"Reference work considered politically sensitive during regional conflicts.","ban_year":null,"categories":["Political"]},{"title":"A Message to Man and Humanity","author":"Aleksandar Cvetković","countries":["Yugoslavia"],"description":"Philosophical or religious treatise with universal themes.","ban_year":null,"categories":["Religious","Philosophy"]},{"title":"On Fierce Wound – Fierce Herb","author":"Ratko Zakić","countries":["Yugoslavia"],"description":"Yugoslav literary work with metaphorical social content.","ban_year":null,"categories":["Other"]},{"title":"Thoughts of a Corpse","author":"Prvoslav Vujčić","countries":["Yugoslavia"],"description":"Existential literary work exploring death and meaning.","ban_year":null,"categories":["Philosophy"]},{"title":"Storytellers II","author":"Boško Novaković","countries":["Yugoslavia"],"description":"Collection of narratives with cultural or political significance.","ban_year":null,"categories":["Political"]},{"title":"Castration of the Wind","author":"Prvoslav Vujčić","countries":["Yugoslavia"],"description":"Surrealist or experimental literary work with transgressive themes.","ban_year":null,"categories":["Other"]}];

let allBooks = [];
let filteredBooks = [];
let chartInstances = {};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Use embedded data instead of fetching
    allBooks = BANNED_BOOKS_DATA;
    filteredBooks = JSON.parse(JSON.stringify(allBooks));
    
    initializeFilters();
    updateStatistics(allBooks);
    createCharts(allBooks);
    populateTable();
});

function initializeFilters() {
    // Get unique countries from all books
    const countrySet = new Set();
    const categorySet = new Set();
    
    allBooks.forEach(book => {
        book.countries.forEach(country => {
            countrySet.add(country);
        });
        if (book.categories) {
            book.categories.forEach(cat => {
                categorySet.add(cat);
            });
        }
    });
    
    const countries = Array.from(countrySet).sort();
    const countrySelect = document.getElementById('countryFilter');
    
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
    
    // Add categories to filter
    const categories = Array.from(categorySet).sort();
    const categorySelect = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('countryFilter').addEventListener('change', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
}

function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCountry = document.getElementById('countryFilter').value;
    const selectedCategory = document.getElementById('categoryFilter').value;
    
    filteredBooks = allBooks.filter(book => {
        // Apply search filter
        if (searchTerm) {
            const searchableText = `${book.title} ${book.author}`.toLowerCase();
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }
        
        // Apply country filter
        if (selectedCountry) {
            if (!book.countries.includes(selectedCountry)) {
                return false;
            }
        }
        
        // Apply category filter
        if (selectedCategory) {
            if (!book.categories || !book.categories.includes(selectedCategory)) {
                return false;
            }
        }
        
        return true;
    });
    
    populateTable();
}

function updateStatistics(books = allBooks) {
    const totalCountries = new Set();
    const totalAuthors = new Set();
    
    books.forEach(book => {
        book.countries.forEach(c => totalCountries.add(c));
        if (book.author && book.author !== 'Unknown') {
            totalAuthors.add(book.author);
        }
    });
    
    document.getElementById('totalCountries').textContent = totalCountries.size;
    document.getElementById('totalBooks').textContent = filteredBooks.length;
    document.getElementById('totalAuthors').textContent = totalAuthors.size;
}

function getChartColors(length) {
    const colors = [
        '#c85a54', '#d97373', '#b85450', '#a77b7b', '#d98686',
        '#b36b65', '#c67070', '#a66060', '#d48080', '#9f5a55'
    ];
    return Array.from({ length }, (_, i) => colors[i % colors.length]);
}

function createCharts(books = allBooks) {
    createCountryChart(books);
    createAuthorsChart(books);
    createCategoryChart(books);
    createTimelineChart(books);
}

function createCountryChart(books = allBooks) {
    // Count books per country
    const countryCounts = {};
    books.forEach(book => {
        book.countries.forEach(country => {
            countryCounts[country] = (countryCounts[country] || 0) + 1;
        });
    });
    
    const countries = Object.entries(countryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15);
    
    const labels = countries.map(c => c[0]);
    const counts = countries.map(c => c[1]);
    const colors = getChartColors(labels.length);
    
    const ctx = document.getElementById('countryChart').getContext('2d');
    
    if (chartInstances.country) {
        chartInstances.country.destroy();
    }
    
    chartInstances.country = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Banned Books',
                data: counts,
                backgroundColor: colors,
                borderRadius: 5,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function createAuthorsChart(books = allBooks) {
    // Count books per author
    const authorCounts = {};
    books.forEach(book => {
        const author = book.author || 'Unknown';
        authorCounts[author] = (authorCounts[author] || 0) + 1;
    });
    
    // Get top 10 authors
    const topAuthors = Object.entries(authorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    const authors = topAuthors.map(entry => entry[0]);
    const counts = topAuthors.map(entry => entry[1]);
    const colors = getChartColors(authors.length);
    
    const ctx = document.getElementById('authorsChart').getContext('2d');
    
    if (chartInstances.authors) {
        chartInstances.authors.destroy();
    }
    
    chartInstances.authors = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: authors,
            datasets: [{
                data: counts,
                backgroundColor: colors,
                borderColor: '#f9f8f6',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

function updateCharts(books = allBooks) {
    createCountryChart(books);
    createAuthorsChart(books);
    createCategoryChart(books);
    createTimelineChart(books);
}

function createCategoryChart(books = allBooks) {
    // Count books per category
    const categoryCounts = {};
    books.forEach(book => {
        if (book.categories) {
            book.categories.forEach(category => {
                categoryCounts[category] = (categoryCounts[category] || 0) + 1;
            });
        }
    });
    
    const categories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1]);
    
    const labels = categories.map(c => c[0]);
    const counts = categories.map(c => c[1]);
    const colors = getChartColors(labels.length);
    
    const ctx = document.getElementById('categoryChart').getContext('2d');
    
    if (chartInstances.category) {
        chartInstances.category.destroy();
    }
    
    chartInstances.category = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: counts,
                backgroundColor: colors,
                borderColor: '#f9f8f6',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        padding: 10,
                        font: {
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

function createTimelineChart(books = allBooks) {
    // Count books by decade
    const decadeCounts = {};
    
    books.forEach(book => {
        if (book.ban_year) {
            const year = parseInt(book.ban_year);
            const decade = Math.floor(year / 10) * 10;
            const decadeLabel = `${decade}s`;
            decadeCounts[decadeLabel] = (decadeCounts[decadeLabel] || 0) + 1;
        }
    });
    
    // Sort by decade
    const decades = Object.keys(decadeCounts).sort();
    const counts = decades.map(d => decadeCounts[d]);
    const colors = getChartColors(decades.length);
    
    const ctx = document.getElementById('timelineChart').getContext('2d');
    
    if (chartInstances.timeline) {
        chartInstances.timeline.destroy();
    }
    
    chartInstances.timeline = new Chart(ctx, {
        type: 'line',
        data: {
            labels: decades,
            datasets: [{
                label: 'Books Banned',
                data: counts,
                backgroundColor: 'rgba(200, 90, 84, 0.12)',
                borderColor: '#c85a54',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#c85a54',
                pointBorderColor: '#f9f8f6',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function populateTable() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
    
    filteredBooks.forEach(book => {
        const row = document.createElement('tr');
        const countriesStr = book.countries.join(', ');
        
        // Format categories as badges
        const categoriesBadges = book.categories 
            ? book.categories.map(cat => `<span class="category-badge">${escapeHtml(cat)}</span>`).join(' ')
            : '';
        
        // Format ban year
        const yearDisplay = book.ban_year || 'Unknown';
        
        row.innerHTML = `
            <td><strong>${escapeHtml(book.title)}</strong></td>
            <td>${escapeHtml(book.author)}</td>
            <td class="description">${escapeHtml(book.description || '')}</td>
            <td class="categories-cell">${categoriesBadges}</td>
            <td class="year-cell">${escapeHtml(yearDisplay)}</td>
            <td>${escapeHtml(countriesStr)}</td>
        `;
        tableBody.appendChild(row);
    });
    
    document.getElementById('tableInfo').textContent = 
        `Showing ${filteredBooks.length} unique banned books`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showMessage(message) {
    const container = document.querySelector('.container');
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        background: #ff6b6b;
        color: white;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 1.1em;
    `;
    messageDiv.textContent = message;
    container.insertBefore(messageDiv, container.firstChild);
}
