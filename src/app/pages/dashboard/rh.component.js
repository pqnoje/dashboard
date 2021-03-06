"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_1 = require("../../hero.service");
var RHDashboardComponent = (function () {
    function RHDashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
        this.pieOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Investimento em RH'
            },
            tooltip: {
                pointFormat: 'R$ {point.y:,.2f}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true
                    },
                    showInLegend: true
                }
            },
            series: [{
                    name: 'Investimentos',
                    colorByPoint: true,
                    data: [{
                            name: 'Salários',
                            y: 1273250
                        }, {
                            name: 'Encargos',
                            y: 1041075,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Benefícios',
                            y: 480093
                        }, {
                            name: 'Reembolso',
                            y: 140102
                        }]
                }]
        };
        this.lineOptions = {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Quantidade de Vendas Mensal'
            },
            subtitle: {
                text: 'Vendas de Seguros por Tipo'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                    name: 'Seguro de Auto',
                    // Define the data points. All series have a dummy year
                    // of 1970/71 in order to be compared on the same x axis. Note
                    // that in JavaScript, months start at 0 for January, 1 for February etc.
                    data: [
                        [Date.UTC(2017, 1, 1), 40230],
                        [Date.UTC(2017, 2, 1), 41231],
                        [Date.UTC(2017, 3, 1), 39291],
                        [Date.UTC(2017, 4, 1), 36009],
                        [Date.UTC(2017, 5, 1), 35768],
                        [Date.UTC(2017, 6, 1), 38889],
                        [Date.UTC(2017, 7, 1), 39890],
                        [Date.UTC(2017, 8, 1), 46912],
                        [Date.UTC(2017, 9, 1), 51023],
                        [Date.UTC(2017, 10, 1), 50786],
                        [Date.UTC(2017, 11, 1), 52928],
                        [Date.UTC(2017, 12, 1), 50980]
                    ]
                }, {
                    name: 'Seguro de Vida',
                    data: [
                        [Date.UTC(2017, 1, 1), 37230],
                        [Date.UTC(2017, 2, 1), 39231],
                        [Date.UTC(2017, 3, 1), 36291],
                        [Date.UTC(2017, 4, 1), 37009],
                        [Date.UTC(2017, 5, 1), 39768],
                        [Date.UTC(2017, 6, 1), 33889],
                        [Date.UTC(2017, 7, 1), 35890],
                        [Date.UTC(2017, 8, 1), 44912],
                        [Date.UTC(2017, 9, 1), 47023],
                        [Date.UTC(2017, 10, 1), 47786],
                        [Date.UTC(2017, 11, 1), 52928],
                        [Date.UTC(2017, 12, 1), 51980]
                    ]
                }, {
                    name: 'Seguro de Celular',
                    data: [
                        [Date.UTC(2017, 1, 1), 36230],
                        [Date.UTC(2017, 2, 1), 38231],
                        [Date.UTC(2017, 3, 1), 37291],
                        [Date.UTC(2017, 4, 1), 39009],
                        [Date.UTC(2017, 5, 1), 34768],
                        [Date.UTC(2017, 6, 1), 37889],
                        [Date.UTC(2017, 7, 1), 31890],
                        [Date.UTC(2017, 8, 1), 42912],
                        [Date.UTC(2017, 9, 1), 45023],
                        [Date.UTC(2017, 10, 1), 47786],
                        [Date.UTC(2017, 11, 1), 68928],
                        [Date.UTC(2017, 12, 1), 65980]
                    ]
                }]
        };
        this.barOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Solicitações'
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                layout: 'vertical'
            },
            xAxis: {
                categories: ['Alteração de dados', 'Histórico de ponto', 'Movimentação de funcionário'],
                labels: {
                    x: -10
                }
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Quantidade'
                }
            },
            series: [{
                    name: 'Gerencial',
                    data: [1, 4, 3]
                }, {
                    name: 'Operacional',
                    data: [6, 4, 2]
                }, {
                    name: 'Outros departamentos',
                    data: [8, 4, 3]
                }],
            responsive: {
                rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                align: 'center',
                                verticalAlign: 'bottom',
                                layout: 'horizontal'
                            },
                            yAxis: {
                                labels: {
                                    align: 'left',
                                    x: 0,
                                    y: -5
                                },
                                title: {
                                    text: null
                                }
                            },
                            subtitle: {
                                text: null
                            },
                            credits: {
                                enabled: false
                            }
                        }
                    }]
            }
        };
        this.columnOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Quantidade de Vendas de Seguros com Serviços'
            },
            subtitle: {
                text: 'Vendas em Cidades Mais Vendidas'
            },
            xAxis: {
                categories: [
                    'São Paulo',
                    'Rio de Janeiro',
                    'Campinas'
                ]
            },
            yAxis: [{
                    min: 0,
                    title: {
                        text: 'Vendas'
                    }
                }, {
                    title: {
                        text: 'Vendas (unidade)'
                    },
                    opposite: true
                }],
            legend: {
                shadow: false
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: {
                    grouping: false,
                    shadow: false,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Seguro de Automóvel',
                    color: 'rgba(165,170,217,1)',
                    data: [150, 73, 20],
                    pointPadding: 0.3,
                    pointPlacement: -0.2
                }, {
                    name: 'Seguro de Automóvel com Seviços',
                    color: 'rgba(126,86,134,.9)',
                    data: [140, 50, 3],
                    pointPadding: 0.4,
                    pointPlacement: -0.2
                }, {
                    name: 'Seguro de Casa',
                    color: 'rgba(248,161,63,1)',
                    data: [183, 178, 198],
                    pointPadding: 0.3,
                    pointPlacement: 0.2,
                    yAxis: 1
                }, {
                    name: 'Seguro de Casa com Serviços',
                    color: 'rgba(186,60,61,.9)',
                    data: [150, 110, 73],
                    pointPadding: 0.4,
                    pointPlacement: 0.2,
                    yAxis: 1
                }]
        };
        this.columnGroupedOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total de Vendas Agrupado por Gênero e Faixa Etária'
            },
            xAxis: {
                categories: ['Automóveis', 'Casas', 'Saúde', 'Riscos Financeiros', 'Riscos Especiais']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Quantidade de Vendas'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'Masculino Jovem',
                    data: [514, 354, 475, 775, 254],
                    stack: 'masculino'
                }, {
                    name: 'Masculino Idoso',
                    data: [310, 454, 457, 212, 545],
                    stack: 'masculino'
                }, {
                    name: 'Feminino Jovem',
                    data: [275, 512, 660, 207, 145],
                    stack: 'feminino'
                }, {
                    name: 'Feminino Idoso',
                    data: [305, 457, 478, 413, 354],
                    stack: 'feminino'
                }]
        };
        this.simpleColumnOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'World\'s largest cities per 2014'
            },
            subtitle: {
                text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
            },
            series: [{
                    name: 'Population',
                    data: [
                        ['Shanghai', 23.7],
                        ['Lagos', 16.1],
                        ['Istanbul', 14.2],
                        ['Karachi', 14.0],
                        ['Mumbai', 12.5],
                        ['Moscow', 12.1],
                        ['São Paulo', 11.8],
                        ['Beijing', 11.7],
                        ['Guangzhou', 11.1],
                        ['Delhi', 11.1],
                        ['Shenzhen', 10.5],
                        ['Seoul', 10.4],
                        ['Jakarta', 10.0],
                        ['Kinshasa', 9.3],
                        ['Tianjin', 9.3],
                        ['Tokyo', 9.0],
                        ['Cairo', 8.9],
                        ['Dhaka', 8.9],
                        ['Mexico City', 8.9],
                        ['Lima', 8.9]
                    ],
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y:.1f}',
                        y: 10,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
        };
    }
    RHDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return RHDashboardComponent;
}());
RHDashboardComponent = __decorate([
    core_1.Component({
        selector: 'rh-dashboard',
        templateUrl: './rh.component.html',
        styleUrls: ['./rh.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], RHDashboardComponent);
exports.RHDashboardComponent = RHDashboardComponent;
//# sourceMappingURL=rh.component.js.map