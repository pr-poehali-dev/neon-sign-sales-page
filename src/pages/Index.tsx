import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [width, setWidth] = useState([100]);
  const [height, setHeight] = useState([50]);
  const [complexity, setComplexity] = useState([1]);

  const calculatePrice = () => {
    const basePrice = width[0] * height[0] * 10;
    const complexityMultiplier = 1 + (complexity[0] - 1) * 0.5;
    return Math.round(basePrice * complexityMultiplier);
  };

  const services = [
    {
      title: "Световые вывески",
      description: "Яркие неоновые вывески для вашего бизнеса",
      icon: "Lightbulb",
      color: "text-neon-yellow",
      glowColor: "shadow-yellow-400",
      image: "/img/10d7d2c2-d388-429c-bf63-4a13ef1aff66.jpg"
    }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Низкое энергопотребление, долгий срок службы"
    },
    {
      icon: "Palette",
      title: "Любые цвета",
      description: "Более 16 миллионов оттенков на выбор"
    },
    {
      icon: "Clock",
      title: "Быстрый монтаж",
      description: "Установка за 1-2 дня"
    },
    {
      icon: "Shield",
      title: "Гарантия 3 года",
      description: "Полная гарантия на все виды работ"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-4">
        <div className="absolute inset-0">
          <img 
            src="/img/9aa819a3-0a1a-4880-b98b-14a9b54f4944.jpg" 
            alt="Neon background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-neon-pink animate-neon-pulse inline-block mr-4">M</span>
            <span className="text-neon-cyan animate-neon-pulse inline-block">NEON</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Создаем яркие неоновые вывески, которые привлекают внимание
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-neon-pink hover:bg-neon-pink/80 text-black font-bold px-8 py-4 text-lg animate-neon-glow"
              style={{ 
                boxShadow: '0 0 20px #FF0080, 0 0 40px #FF0080',
                textShadow: '0 0 10px #000'
              }}
            >
              Заказать вывеску
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black px-8 py-4 text-lg"
            >
              Посмотреть работы
            </Button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-yellow rounded-full animate-neon-pulse"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-neon-cyan rounded-full animate-neon-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-pink rounded-full animate-neon-pulse"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-neon-cyan">Наши</span> <span className="text-neon-yellow">услуги</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Полный спектр решений для вашего бизнеса</p>
          
          <div className="grid gap-8 max-w-md mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-neon-purple transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 ${service.color} group-hover:animate-neon-pulse`}>
                    <Icon name={service.icon} size={48} />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black"
                    onClick={() => alert('Телефон: 8 (912) 854-47-77')}
                  >
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-neon-pink">Калькулятор</span> <span className="text-white">стоимости</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Рассчитайте примерную стоимость вашей вывески</p>
          
          <Card className="bg-black/50 border-neon-cyan/30">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-neon-cyan">Параметры вывески</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <Label className="text-white mb-2 block">Ширина (см): {width[0]}</Label>
                <Slider
                  value={width}
                  onValueChange={setWidth}
                  max={500}
                  min={20}
                  step={10}
                  className="w-full"
                />
              </div>
              
              <div>
                <Label className="text-white mb-2 block">Высота (см): {height[0]}</Label>
                <Slider
                  value={height}
                  onValueChange={setHeight}
                  max={200}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>
              
              <div>
                <Label className="text-white mb-2 block">Сложность (1-5): {complexity[0]}</Label>
                <Slider
                  value={complexity}
                  onValueChange={setComplexity}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              
              <div className="text-center pt-6 border-t border-gray-700">
                <div className="text-3xl font-bold mb-4">
                  <span className="text-neon-yellow animate-neon-pulse">
                    {calculatePrice().toLocaleString()} ₽
                  </span>
                </div>
                <Button 
                  size="lg" 
                  className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold"
                  style={{ boxShadow: '0 0 20px #00FFFF' }}
                  onClick={() => alert('Телефон для заказа: 8-912-854-47-77')}
                >
                  Оформить заказ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-neon-yellow">Почему</span> <span className="text-neon-pink">выбирают нас</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Преимущества работы с нашей компанией</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-neon-yellow transition-all duration-300 group text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 text-neon-yellow group-hover:animate-neon-pulse">
                    <Icon name={advantage.icon} size={40} />
                  </div>
                  <CardTitle className="text-lg text-white">{advantage.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-purple-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-cyan">Свяжитесь</span> <span className="text-white">с нами</span>
          </h2>
          <p className="text-gray-400 mb-12 text-lg">Готовы обсудить ваш проект неоновой вывески</p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="bg-black/50 border-neon-pink/30">
              <CardHeader>
                <CardTitle className="text-xl text-neon-pink">Быстрый звонок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <Input 
                  placeholder="Телефон" 
                  className="bg-gray-800 border-gray-600 text-white"
                />
                <Button 
                  className="w-full bg-neon-pink hover:bg-neon-pink/80 text-black font-bold"
                  style={{ boxShadow: '0 0 15px #FF0080' }}
                >
                  Заказать звонок
                </Button>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="text-neon-cyan" size={24} />
                <div>
                  <p className="text-white font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-gray-400 text-sm">Ежедневно 9:00 - 21:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Icon name="Mail" className="text-neon-yellow" size={24} />
                <div>
                  <p className="text-white font-semibold">info@neonsigns.ru</p>
                  <p className="text-gray-400 text-sm">Ответим в течение часа</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" className="text-neon-pink" size={24} />
                <div>
                  <p className="text-white font-semibold">Москва, ул. Неоновая, 15</p>
                  <p className="text-gray-400 text-sm">Шоурум работает по записи</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="text-neon-pink">NEON</span>
            <span className="text-neon-cyan">SIGNS</span>
          </div>
          
          <div className="flex space-x-6">
            <Badge variant="outline" className="border-neon-yellow text-neon-yellow">
              Работаем с 2015 года
            </Badge>
            <Badge variant="outline" className="border-neon-cyan text-neon-cyan">
              500+ довольных клиентов
            </Badge>
            <Badge variant="outline" className="border-neon-pink text-neon-pink">
              Гарантия 3 года
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;