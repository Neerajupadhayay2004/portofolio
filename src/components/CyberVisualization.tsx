import React, { useEffect, useRef } from 'react';

interface CyberVisualizationProps {
  type: 'hacking' | 'security' | 'network';
  className?: string;
}

const CyberVisualization: React.FC<CyberVisualizationProps> = ({ type, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId: number;
    const particles: any[] = [];
    const connections: any[] = [];

    // Initialize based on type
    const initVisualization = () => {
      particles.length = 0;
      connections.length = 0;

      if (type === 'hacking') {
        // Matrix-style falling code effect
        for (let i = 0; i < 50; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 3 + 1,
            char: String.fromCharCode(0x30A0 + Math.random() * 96),
            opacity: Math.random(),
            trail: []
          });
        }
      } else if (type === 'security') {
        // Shield and lock animations
        for (let i = 0; i < 30; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            angle: Math.random() * Math.PI * 2,
            radius: Math.random() * 100 + 50,
            speed: Math.random() * 0.02 + 0.01,
            type: Math.random() > 0.5 ? 'shield' : 'lock',
            pulse: Math.random() * Math.PI * 2
          });
        }
      } else if (type === 'network') {
        // Network topology visualization
        for (let i = 0; i < 25; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 4 + 2,
            connections: [],
            isServer: Math.random() > 0.8,
            pulse: Math.random() * Math.PI * 2
          });
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (type === 'hacking') {
        // Matrix effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, i) => {
          // Update position
          particle.y += particle.speed;
          if (particle.y > canvas.height) {
            particle.y = -20;
            particle.x = Math.random() * canvas.width;
          }

          // Add to trail
          particle.trail.push({ x: particle.x, y: particle.y });
          if (particle.trail.length > 10) {
            particle.trail.shift();
          }

          // Draw trail
          particle.trail.forEach((point: any, index: number) => {
            const alpha = (index / particle.trail.length) * particle.opacity;
            ctx.fillStyle = `rgba(0, 255, 157, ${alpha})`;
            ctx.font = '12px monospace';
            ctx.fillText(particle.char, point.x, point.y);
          });

          // Draw main character
          ctx.fillStyle = `rgba(0, 255, 157, ${particle.opacity})`;
          ctx.font = 'bold 14px monospace';
          ctx.fillText(particle.char, particle.x, particle.y);

          // Random character change
          if (Math.random() < 0.1) {
            particle.char = String.fromCharCode(0x30A0 + Math.random() * 96);
          }
        });

        // Add scanning lines
        const time = Date.now() * 0.001;
        for (let i = 0; i < 3; i++) {
          const y = (Math.sin(time + i * 2) * 0.5 + 0.5) * canvas.height;
          ctx.strokeStyle = `rgba(0, 255, 157, ${0.3 - i * 0.1})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }

      } else if (type === 'security') {
        // Security visualization
        particles.forEach((particle) => {
          particle.angle += particle.speed;
          particle.pulse += 0.1;

          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2;
          const x = centerX + Math.cos(particle.angle) * particle.radius;
          const y = centerY + Math.sin(particle.angle) * particle.radius;

          const pulseSize = 1 + Math.sin(particle.pulse) * 0.3;

          if (particle.type === 'shield') {
            // Draw shield
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(pulseSize, pulseSize);
            ctx.strokeStyle = `rgba(0, 255, 157, 0.8)`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, -15);
            ctx.lineTo(-10, -5);
            ctx.lineTo(-10, 10);
            ctx.lineTo(0, 20);
            ctx.lineTo(10, 10);
            ctx.lineTo(10, -5);
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
          } else {
            // Draw lock
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(pulseSize, pulseSize);
            ctx.strokeStyle = `rgba(0, 184, 255, 0.8)`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.rect(-8, -5, 16, 12);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(0, -8, 6, Math.PI, 0, false);
            ctx.stroke();
            ctx.restore();
          }
        });

        // Central security hub
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const time = Date.now() * 0.001;
        const hubSize = 20 + Math.sin(time) * 5;

        ctx.strokeStyle = 'rgba(0, 255, 157, 0.8)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, hubSize, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(0, 255, 157, 0.3)';
        ctx.fill();

      } else if (type === 'network') {
        // Network topology
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.pulse += 0.1;

          // Bounce off edges
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          // Draw connections
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = other.x - particle.x;
            const dy = other.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (1 - distance / 100) * 0.5;
              ctx.strokeStyle = `rgba(0, 184, 255, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();

              // Data packets
              if (Math.random() < 0.01) {
                const packetX = particle.x + dx * 0.5;
                const packetY = particle.y + dy * 0.5;
                ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
                ctx.beginPath();
                ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }

          // Draw node
          const pulseSize = particle.size + Math.sin(particle.pulse) * 1;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);

          if (particle.isServer) {
            ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#ff0000';
          } else {
            ctx.fillStyle = 'rgba(0, 255, 157, 0.8)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ff9d';
          }

          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    initVisualization();
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initVisualization();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [type]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default CyberVisualization;